import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.yml': 'text/yaml; charset=utf-8',
  '.yaml': 'text/yaml; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
};

function isPathInside(parent, target) {
  const relative = path.relative(parent, target);
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative);
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
  fs.createReadStream(filePath).pipe(res);
}

function resolveStaticPath(urlPath) {
  const normalizedPath = path.normalize(urlPath).replace(/^\/+/, '');
  const absolutePath = path.join(distDir, normalizedPath);
  if (!isPathInside(distDir, absolutePath)) {
    return null;
  }
  return absolutePath;
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(requestUrl.pathname);

  if (pathname === '/admin') {
    res.writeHead(301, { Location: '/admin/' });
    return res.end();
  }

  if (pathname === '/admin/') {
    const adminIndex = path.join(distDir, 'admin', 'index.html');
    if (fs.existsSync(adminIndex)) {
      return sendFile(res, adminIndex);
    }
  }

  if (pathname.startsWith('/admin/')) {
    const adminPath = resolveStaticPath(pathname);
    if (adminPath && fs.existsSync(adminPath) && fs.statSync(adminPath).isFile()) {
      return sendFile(res, adminPath);
    }

    const adminIndex = path.join(distDir, 'admin', 'index.html');
    if (fs.existsSync(adminIndex)) {
      return sendFile(res, adminIndex);
    }
  }

  const staticPath = resolveStaticPath(pathname);
  if (staticPath) {
    if (fs.existsSync(staticPath) && fs.statSync(staticPath).isFile()) {
      return sendFile(res, staticPath);
    }

    if (fs.existsSync(staticPath) && fs.statSync(staticPath).isDirectory()) {
      const indexPath = path.join(staticPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        return sendFile(res, indexPath);
      }
    }
  }

  const fallback = path.join(distDir, 'index.html');
  if (fs.existsSync(fallback)) {
    return sendFile(res, fallback);
  }

  res.statusCode = 404;
  res.end('Not Found');
});

const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0');
