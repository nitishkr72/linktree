import './App.css';
import Header from './Header';
import SignInSignUp from './screens/SignInSignUp';
import Home from './screens/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div style={{width: "100vw", height: "100vh", overflowY: "scroll"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignInSignUp} />
          <Route path='/home' Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
