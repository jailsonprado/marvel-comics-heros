import { render } from '@testing-library/react';
import { Navigation } from '@/components/organism';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

test('renders MenuHeader without errors', () => {
  const store = mockStore({});
  render(
    <Provider store={store}>
      <Navigation itemPerPage={10} />
    </Provider>,
  );
});
