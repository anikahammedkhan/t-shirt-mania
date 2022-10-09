import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/',
    children: [
      {path: '/', element: <Home></Home>},
      {
        path: 'home',
        loader: ()=>fetch('tshirt.json'),
        element: <Home></Home>
      },
      {path: 'orders', element: <Orders></Orders>},
      {path: 'about', element: <About></About>},
      {path: '*', element: <h1>404</h1>}
    ],
     element: <Main></Main>},
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
