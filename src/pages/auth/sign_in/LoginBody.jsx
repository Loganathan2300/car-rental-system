import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../../../components/Card';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
// import { signIn } from '../../../constants/ApiService'; // Import your signIn function

const LoginBody = () => {
  const [useData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...useData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const getLogin = async () => {
      try {
        const response = await axios({
          method: "post",
        //   url: `${Base_URL}/login`,
        url:'https://reqres.in/api/login',
          timeout: 1000,
          data: {
            email: useData.username,
            password: useData.password,
          },
        });
        console.log(response);
        console.log("Token " + response.data.token);
        localStorage.setItem("Token", response?.data.token);
        navigate("/dashboard");
      } catch (error) {
        alert(error.status === 400? "UserName or Password is Invalid": "Server Busy");
      }
    };
    getLogin();
  };

//   const handelSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await signIn({
//         email: useData.username,
//         password: useData.password,
//       });

//       console.log("token ", response.data);
//       localStorage.setItem("Token", response.data.token); // Assuming the token is in `response.data.token`
//       navigate("/sample"); // Navigate to the home page after successful login
//     } catch (error) {
//       alert(
//         error.response?.status === 400
//           ? "Username or Password is Invalid"
//           : "Server Busy"
//       );
//     }
//   };

  return (
    <div className="py-4">
      <Card className="border-0 shadow-lg bg-light card mx-auto mt-2 col-md-8 col-lg-4 col-xl-3 p-4">
        <div className="text-center">
          <img
            className="rounded-pill mt-4"
            width="70"
            height="70"
            src="path/to/your/logo.png" // Provide a valid logo path here
            alt="Logo"
          />
        </div>
        <h3 className="text-center fst-italic mt-3 text-bold">FTS-Academy</h3>
        <br />

        <form onSubmit={(e)=>onSubmit(e)} className="form">
          <Input
            type="text"
            placeholder="Username or E-mail"
            name="username"
            className="col-12 p-2 rounded-3 border border-secondary"
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            className="col-12 mt-4 p-2 rounded-3 border border-secondary"
            onChange={handleChange}
            required
          />

          <Button
            className="btn bg-secondary text-white mb-4 mt-5 col-12"
            children="SignIn"
          />
        </form>
        <div className="row">
          <span className="col-8 text-secondary" style={{ cursor: "pointer" }}>
            Forget Password?
          </span>
          <span
            className="text-end col-4 text-secondary"
            style={{ cursor: "pointer" }}
            // onClick={() => navigate("/sample")} // Adjust the path as needed
          >
            SignUp
          </span>
        </div>
        <div>
          <p className="fs-6 opacity-50 mt-2 text-center">
            or you can sign in with
          </p>
        </div>
        {/* Uncomment this if you want to add social login options
        <div className="text-center">
          {img.map((imgs, index) => (
            <img
              key={index}
              className="rounded-pill me-2"
              style={{ cursor: "pointer" }}
              width="20"
              height="20"
              src={imgs}
              alt={imgs}
            />
          ))}
        </div> */}
      </Card>
    </div>
  );
};

export default LoginBody;
