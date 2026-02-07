import { fireEvent, within } from '@testing-library/react';
import { renderWithRouter } from '../test/test-utils';
import Maps from './Maps';

describe('Maps', () => {
  it('opens and closes the lightbox', () => {
    const { getByRole } = renderWithRouter(<Maps />);

    fireEvent.click(getByRole('button', { name: /open pima county interactive map map/i }));
    const lightbox = document.querySelector('.lightbox-content');
    expect(lightbox).toBeInTheDocument();
    expect(within(lightbox).getByText('Pima County Interactive Map')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(document.querySelector('.lightbox-content')).not.toBeInTheDocument();
  });
});
