import { render } from '@testing-library/react';
import { ComicCard } from '@/components/molecules';

describe('ComicCard component', () => {
  const defaultProps = {
    title: 'Comic Title',
    imageUrl: 'comic_image_url.jpg',
  };

  it('should render ComicCard component with correct title and image', () => {
    const { getByText, getByAltText } = render(<ComicCard {...defaultProps} />);

    expect(getByText('Comic Title')).toBeInTheDocument();
    expect(getByAltText('Comic Title')).toBeInTheDocument();
  });
});
