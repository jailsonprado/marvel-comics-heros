import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { DetailsSection } from '@/components/organism/details-section/details-section';
import { addToFavoriteHero } from '@/redux/heros/heros-slice';
import { CharacterPaylodUnique, Comics } from '@/types/types-response';
import { waitFor } from '@testing-library/dom';

// Mock the redux store
const mockStore = configureStore([]);
const store = mockStore({
  heroSlice: {
    favoriteHero: [],
  },
});

describe('DetailsSection component', () => {
  const mockHero: CharacterPaylodUnique = {
    id: 1,
    name: 'Spider-Man',
    description: 'Friendly neighborhood superhero',
    thumbnail: {
      path: 'https://example.com/spiderman',
      extension: 'jpg',
    },
    comics: {
      available: 1,
      items: [
        {
          name: 'The Amazing Spider-Man',
          type: 'comic',
        },
      ],
    },
    modified: '2023-08-10T10:00:00Z',
    series: {
      available: 3,
    },
  };

  const mockComics: Comics[] = [
    {
      id: 1,
      name: 'Comic 1',
      description: 'Description of Comic 1',
      thumbnail: {
        path: 'https://example.com/comic1',
        extension: 'jpg',
      },
      comics: {
        available: 1,
        items: [
          {
            name: 'Issue 1',
            type: 'comic',
          },
        ],
      },
      modified: '2023-08-10T08:00:00Z',
    },
  ];

  test('should render DetailsSection component', () => {
    render(
      <Provider store={store}>
        <DetailsSection
          hero={mockHero}
          loading={false}
          comics={mockComics}
          loadingData={false}
        />
      </Provider>,
    );

    const descriptionElement = screen.getByText(mockHero.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('should call addToFavoriteHero when the add button is clicked', () => {
    render(
      <Provider store={store}>
        <DetailsSection
          hero={mockHero}
          loading={false}
          comics={mockComics}
          loadingData={false}
        />
      </Provider>,
    );

    const addButton = screen.getByAltText('favorite logo add');
    fireEvent.click(addButton);

    waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(addToFavoriteHero(mockHero));
    });
  });
});
