import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import MyRoutes from './routes';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
