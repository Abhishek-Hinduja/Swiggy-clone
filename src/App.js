import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';


const Applayout = ()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
}

const AppRouter = createBrowserRouter([
  {
    path : "/",
    element : <Applayout/>,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element : <Body/>
      },
      {
        path : "/About",
        element : <About/>,
        children: [{
          path:"Profile",
          element:<Profile/>,
        },
        ],
      },
      {
        path : "/Contact",
        element : <Contact/>
      },
      {
        path : "/restaurant/:id",
        element : <RestaurantMenu/>
      },
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter}/>);

