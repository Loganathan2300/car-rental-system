import React from "react";
import Card from "../../../component/card/Card"; 
import Input from "../../../component/inputTag/Input"; 
import Button from "../../../component/button/CustomButton"; 
import { Box, Typography } from "@mui/material";
import { socialLinks } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import company_logo from '../../../assets/image/Screenshot 2024-10-16 180150.png';
import background_img from '../../../assets/image/wp8664414.jpg';


const Login = () => {
    const navigation=useNavigate();
  return (
    <Box 
      display="flex" 
      alignItems="center" 
    //   justifyContent="center" 
      height="100vh" 
      paddingX={{ xs: 2, sm: 4 }}
      sx={{
        backgroundImage: `url(${background_img})`, 
        backgroundSize: 'center',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // filter: 'blur(8px)', 
      }}
    >
      <Card className="shadow-lg bg-light" sx={{ width: { xs: '90%', sm: '80%', md: '400px' }, padding: '20px',backgroundColor: 'Hex triplet' }}>
        <Box textAlign="center">
          <img className="rounded-pill" width="190" height="170" src={company_logo} alt="Logo" style={{ paddingBottom: '20px', paddingTop: '10px' }} />
          {/* <Typography variant="h5" className="fst-italic fw-bold" sx={{ paddingBottom: '20px', paddingTop: '10px' }}>
            FTS-Academy
          </Typography> */}
        </Box>

        <form className="form">
          <Input  
            type="email" 
            placeholder="E-mail" 
            name="email" 
            sx={{ paddingBottom: '10px',paddingTop:'8px', height: '40px', '& .MuiInputBase-input': { padding: '8px' } }} 
            variant="outlined" label="Email"
            fullWidth 
            required 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            name="password" 
            sx={{ paddingBottom: '10px',paddingTop:'8px', height: '40px', '& .MuiInputBase-input': { padding: '8px' } }} 
            variant="outlined" label="password"
            fullWidth 
            required 
          />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ marginY: '14px' }} 
            onClick={() => console.log("Login clicked")}
          >
            Login
          </Button>
        </form>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <span className="text-secondary" style={{ cursor: "pointer" }}> Forgot Password? </span>
          <span className="text-secondary" style={{ cursor: "pointer" }} onClick={()=>{navigation('/sign-up')}}> Sign Up </span>
        </Box>
        
        <Box textAlign="center" mt={3}>
          <Typography variant="body2" className="opacity-50" sx={{ paddingBottom: '10px' }}>or you can sign in with</Typography>
          <div className="text-center">
            {socialLinks.map((link, index) => (
              <Link key={index} to={link.href} target="_blank" rel="noopener noreferrer">
                <img className="rounded-pill mx-3 px-3" width={link.width} height={link.height} src={link.src} alt={link.alt}  style={{ margin: '0 7px' }} />
              </Link>
            ))}
          </div>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;




//  {/* <Box display="flex" justifyContent="space-between" mt={3}>
//           <Button 
//             variant="outlined" 
//             color="secondary" 
//             sx={{ flexGrow: 1, marginRight: '5px' }}
//             onClick={() => console.log("Sign Up clicked")}
//           >
//             Sign Up
//           </Button>
//           <Button 
//             variant="contained" 
//             color="primary" 
//             sx={{ flexGrow: 1, marginLeft: '5px' }}
//             onClick={() => console.log("Login clicked")}
//           >
//             Login
//           </Button>
//         </Box> */}