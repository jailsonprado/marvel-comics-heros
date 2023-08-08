import { HookProvider } from '@/context';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import RoutesManager from './routes';

function App() {
  return (
    <Provider store={store}>
      <HookProvider>
        <RoutesManager />
      </HookProvider>
    </Provider>
  );
}

export default App;
