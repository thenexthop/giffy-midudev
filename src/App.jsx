import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

// global context 
import GifsContextProvider from './context/GifsContext';

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
        path: 'gif/:id',
        element: <Detail />
      },
      {
        path: 'search/:keyword',
        element: <SearchResult />
      },
    ]
  },
  
  

]);

function App() {
  
  return (
    <>
      <GifsContextProvider>
        <RouterProvider router={router} />
      </GifsContextProvider>
    </>
  )
}

export default App
