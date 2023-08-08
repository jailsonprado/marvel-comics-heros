import { render, screen } from '@testing-library/react';
import { TotalHero } from '@/components/molecules';

describe('TotalHero', () => {
  it('should render the component with the correct text', () => {
    const itemPerPage = 10;

    render(<TotalHero itemPerPage={itemPerPage} />);

    const totalHeroText = screen.getByText(`Encontramos ${itemPerPage} heróis`);
    expect(totalHeroText).toBeInTheDocument();
  });

  it('should render the component with the correct font size and color', () => {
    const itemPerPage = 15;

    render(<TotalHero itemPerPage={itemPerPage} />);

    const totalHeroText = screen.getByText(`Encontramos ${itemPerPage} heróis`);
    expect(totalHeroText).toHaveStyle({
      fontSize: '18px',
      color: '#696969',
    });
  });
});
