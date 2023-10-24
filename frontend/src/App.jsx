import React, { Component } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Main from './Page/Main';
import Adopt from './Page/Adopt';
import Help from './Page/Help';
import Statistic from './Page/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "Adopt",
    element: <Adopt/>,
  },
  {
    path: "Help",
    element: <Help/>,
  },
  {
    path: "Statistics",
    element: <Statistic/>,
  },
]);

class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <RouterProvider router={router}></RouterProvider>
      </div>
    )
  }
}

export default App;
