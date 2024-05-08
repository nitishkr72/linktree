import './App.css';
import Header from './Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignInSignUp from './screens/SignInSignUp';
import Home from './screens/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInSignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
