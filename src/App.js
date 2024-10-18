import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sample from './pages/Sample';
import Login from './pages/auth/sign_in/Login';
import SignUp from './pages/auth/sign_up/SignUp';
import Header from './pages/layout/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Sample />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
