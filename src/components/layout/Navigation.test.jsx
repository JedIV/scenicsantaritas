import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouter } from '../../test/test-utils';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('opens dropdown on focus', async () => {
    const { getByText } = renderWithRouter(<Navigation />);
    const actNowLink = getByText('Act Now!');

    fireEvent.focus(actNowLink);

    await waitFor(() => {
      expect(actNowLink).toHaveAttribute('aria-expanded', 'true');
    });
    expect(getByText('Write Letters')).toBeInTheDocument();
  });
});
