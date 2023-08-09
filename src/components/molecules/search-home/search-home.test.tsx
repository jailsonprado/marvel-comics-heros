import { render, screen, fireEvent, waitFor, act } from '@/utils/test-utils';
import { SearchHero } from './search-home';

jest.useFakeTimers();

test('should render the search input and icon', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<SearchHero value="" handleChange={() => {}} />);

  const searchIcon = screen.getByTestId('icone-de-busca');
  expect(searchIcon).toBeInTheDocument();

  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
  expect(searchInput).toHaveValue('');
});

test('should call handleChange with the correct search value', () => {
  const handleChangeMock = jest.fn();
  render(<SearchHero value="Spider-Man" handleChange={handleChangeMock} />);

  const searchInput = screen.getByRole('textbox');
  fireEvent.change(searchInput, { target: { value: 'Spider-Man' } });

  expect(handleChangeMock).toHaveBeenCalledWith('Spider-Man');
});

test('should debounce the handleChange function', async () => {
  const handleChangeMock = jest.fn();

  act(() => {
    render(<SearchHero value="" handleChange={handleChangeMock} />);
  });

  const searchInput = screen.getByRole('textbox');

  act(() => {
    fireEvent.change(searchInput, { target: { value: 'Iron Man' } });
  });

  expect(handleChangeMock).toBeCalled();

  act(() => {
    jest.advanceTimersByTime(700);
  });

  await waitFor(() =>
    expect(handleChangeMock).toHaveBeenCalledWith('Iron Man'),
  );
});
