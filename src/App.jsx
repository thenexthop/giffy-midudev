import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

// components
import ListOfGifs from "./components/ListOfGifs";
import { Children } from 'react';
import Main from './layouts/Main';

const router = createBrowserRouter([
  {
    path: '/gif',
    element: <Main />,
    children: [
      {
        path: '/gif/:keyword',
        element: <ListOfGifs />
      },
    ]
  },
  
  

]);

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
