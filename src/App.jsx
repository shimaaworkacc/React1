import About from './Components/About';
import Home from './Components/Home';
import Layout from './Components/Layout';
import NotFound from './Components/NotFound';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


export default function App() {



  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/portfolio', element: <Portfolio></Portfolio> },
        { path: '/contact', element: <Contact></Contact> },
        { path: '*' ,element:<NotFound></NotFound>}
      ]
    }
  ])

  return (
    
      <RouterProvider router={routes} />
 
  )
}


