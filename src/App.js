import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/sign_in/Login';
import SignUp from './pages/auth/sign_up/SignUp';
import Header from './pages/layout/Header';
import UserDetails from './pages/auth/user_details/UserDetails';
import Layout from './pages/layout/Layout';
import CarDetails from './pages/dashboard/CarDetails';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<Sample />} /> */}
    //     <Route path="/user-details" element={<UserDetails />} />
    //   </Routes>
    // </BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
       <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Layout />}>
          <Route path="/home/dasboard" element={<CarDetails />} />
          <Route path="/home/user-details" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
