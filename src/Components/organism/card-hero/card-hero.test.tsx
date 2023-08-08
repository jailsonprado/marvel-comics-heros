import { CharacterPaylod } from '@/types/types-response';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CardHeroComponent } from './card-hero';

import {
  addToFavoriteHero,
  removeFromFavoriteHero,
} from '@/redux/heros/heros-slice';
import { waitFor } from '@testing-library/dom';
import { store } from '@/redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('CardHeroComponent', () => {
  const mockData: CharacterPaylod[] = [
    {
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
    },
  ];

  test('should render CardHeroComponent', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardHeroComponent data={mockData} key={1} />
        </BrowserRouter>
      </Provider>,
    );

    const cardHeroComponent = screen.getByText(/Spider-Man/i);
    expect(cardHeroComponent).toBeInTheDocument();
  });

  test('should call addToFavoriteHero when the add button is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardHeroComponent data={mockData} key={1} />
        </BrowserRouter>
      </Provider>,
    );

    const addButton = screen.getByAltText('favorite logo add');
    fireEvent.click(addButton);

    waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        addToFavoriteHero({
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
        }),
      );
    });
  });

  test('should call removeFromFavoriteHero when the remove button is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardHeroComponent data={mockData} key={1} />
        </BrowserRouter>
      </Provider>,
    );

    const removeButton = screen.getByAltText('favorite logo remove');
    fireEvent.click(removeButton);
    waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(removeFromFavoriteHero(1));
    });
  });
});
