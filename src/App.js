import './index.scss';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Provider store={store}>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Provider>
      </Routes>
    </div>
  );
}

export default App;
