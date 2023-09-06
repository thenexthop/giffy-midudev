import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

// layouts
import Main from './layouts/Main';

// pages
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import SearchResult from './pages/searchResult/SearchResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/gif/:id',
        element: <Detail />
      },
      {
        path: '/search/:keyword',
        element: <SearchResult />
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
