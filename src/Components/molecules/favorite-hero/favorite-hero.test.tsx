import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { FavoriteHero } from './favorite-hero';
import { listOnlyFavorites } from '@/redux/heros/heros-slice';
import { waitFor } from '@testing-library/dom';

const mockStore = configureStore([]);

describe('FavoriteHero', () => {
  it('should render the component with toggle off by default', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <FavoriteHero />
      </Provider>,
    );

    const favorito02Icon = screen.getByAltText('favorito02-icon');
    waitFor(() => {
      expect(favorito02Icon).toBeInTheDocument();
    });

    const favorito01Icon = screen.queryByAltText('favorito01-icon');
    waitFor(() => {
      expect(favorito01Icon).not.toBeInTheDocument();
    });
  });

  it('should toggle the state and dispatch the action when the toggle button is clicked', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <FavoriteHero />
      </Provider>,
    );

    const toggleButton = screen.getByAltText('favorito02-icon');

    fireEvent.click(toggleButton);

    const favorito02Icon = screen.queryByAltText('favorito02-icon');
    waitFor(() => {
      expect(favorito02Icon).not.toBeInTheDocument();
    });

    const favorito01Icon = screen.getByAltText('favorito01-icon');
    waitFor(() => {
      expect(favorito01Icon).toBeInTheDocument();
    });

    waitFor(() => {
      expect(store.getActions()).toEqual([listOnlyFavorites(true)]);
    });
  });
});
