
import './App.css';
import CustomerAdd from './component/customerAdd';
import CustomerView from './component/customerView';
import { Provider } from 'react-redux';

import { store } from './component/Store';
function App() {
  return (
    <Provider store={store}>
 <div className="App">
  <h1>React Redux Customer</h1>
    <CustomerAdd/>
    <CustomerView/>
    </div>
    </Provider>
   
  );
}

export default App;
