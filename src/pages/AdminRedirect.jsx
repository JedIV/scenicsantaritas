import { useEffect } from 'react';

function AdminRedirect() {
  useEffect(() => {
    window.location.replace('/admin/index.html');
  }, []);

  return null;
}

export default AdminRedirect;
