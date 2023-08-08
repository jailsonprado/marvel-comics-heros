import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { OrderByName } from '@/components/molecules';
import { toggleActive } from '@/redux/heros/heros-slice';
import { waitFor } from '@testing-library/dom';

const mockStore = configureStore([]);

describe('OrderByName', () => {
  it('should render the component with toggle off by default', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <OrderByName />
      </Provider>,
    );

    const toggleOffIcon = screen.getByAltText('toggle-off-icon');
    expect(toggleOffIcon).toBeInTheDocument();

    const toggleOnIcon = screen.queryByAltText('toggle-on-icon');
    waitFor(() => {
      expect(toggleOnIcon).not.toBeInTheDocument();
    });
  });

  it('should toggle the state when the toggle button is clicked', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <OrderByName />
      </Provider>,
    );

    const toggleButton = screen.getByAltText('toggle-off-icon');

    fireEvent.click(toggleButton);

    const toggleOffIcon = screen.queryByAltText('toggle-off-icon');
    waitFor(() => {
      expect(toggleOffIcon).not.toBeInTheDocument();
    });

    const toggleOnIcon = screen.getByAltText('toggle-on-icon');
    waitFor(() => {
      expect(toggleOnIcon).toBeInTheDocument();
    });
  });

  it('should dispatch the toggleActive action with the correct payload', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <OrderByName />
      </Provider>,
    );

    const toggleButton = screen.getByAltText('toggle-off-icon');

    fireEvent.click(toggleButton);
    waitFor(() => {
      expect(store.getActions()).toEqual([toggleActive(true)]);
    });
  });
});
