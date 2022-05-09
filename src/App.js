import React, { Fragment } from "react";
import Navbar from './components/Navbar'
import UserList from "./components/UserList";
// redux
import { Provider } from 'react-redux'
import store from './store' // nombre carpeta, no el archivo

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
        <UserList />
      </Provider>
    </Fragment>
  );
}

export default App;
