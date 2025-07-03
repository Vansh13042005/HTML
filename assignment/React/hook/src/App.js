import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import ReduxCounter from './ReduxCounter';

function App() {
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );
}

export default App;