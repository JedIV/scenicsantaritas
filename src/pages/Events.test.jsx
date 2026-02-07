import { renderWithRouter } from '../test/test-utils';
import Events from './Events';

describe('Events', () => {
  it('shows a message when there are no upcoming events', () => {
    const { getByText } = renderWithRouter(<Events />);

    expect(getByText('No events at the moment. Please check back soon.')).toBeInTheDocument();
  });
});
