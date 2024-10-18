import React from "react";
import { Box, Typography } from "@mui/material";
import { socialLinks } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "../../../component/card/Card";
import Input from "../../../component/inputTag/Input";
import Button from "../../../component/button/CustomButton";
import background_img from "../../../assets/image/wp8664414.jpg";

const SignUp = () => {
  const navigation = useNavigate();
  return (
    <Box display="flex" alignItems="center" height="100vh" paddingX={{ xs: 2, sm: 4 }}
      sx={{
        backgroundImage: `url(${background_img})`,
        backgroundSize: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card className="shadow-lg bg-light" sx={{ width: { xs: "90%", sm: "80%", md: "400px" }, padding: "20px",backgroundColor: "Hex triplet",}}>
        <Box display="flex" alignItems="center" justifyContent="flex-start" sx={{ paddingY: "20px", paddingTop: "0%" }}>
          {/* <img className="rounded-pill" width="190" height="170" src={company_logo} alt="Logo" style={{ paddingBottom: '20px', paddingTop: '10px' }} /> */}
          <Typography variant="h5" className="fst-italic fw-bold"
            sx={{ paddingBottom: "20px", paddingTop: "15px", display: "flex", alignItems: "center" }}>
            <ArrowBackIcon sx={{ marginRight: 1 }} onClick={() => {navigation("/")}}/>Register Details</Typography>
        </Box>

        <form className="form">
            {/* <Lable children="Name" htmlFor="name"/> */}
          <Input type="text"  placeholder="Name" name="name" fullWidth required variant="outlined" label="Name"
            sx={{ paddingBottom: "10px",paddingTop:'8px', height: "40px", "& .MuiInputBase-input": { padding: "8px" } }}/>

          <Input type="email" placeholder="E-mail" name="email" fullWidth required variant="outlined" label="E-mail"
            sx={{ paddingBottom: "10px",paddingTop:'8px', height: "40px", "& .MuiInputBase-input": { padding: "8px" } }}/>

          <Input type="password" placeholder="Password" name="password" fullWidth required variant="outlined" label="Password"
            sx={{ paddingBottom: "10px",paddingTop:'8px', height: "40px", "& .MuiInputBase-input": { padding: "8px" }}}/>

          <Input type="phoneNumber" placeholder="phone number" name="phoneNumber" fullWidth required variant="outlined" label="Phone Number"
            sx={{ paddingBottom: "10px",paddingTop:'8px', height: "40px", "& .MuiInputBase-input": { padding: "8px" }}}/>

          <Button variant="contained" color="primary" fullWidth
            sx={{ marginY: "19px" }} onClick={() => console.log("Login clicked")} > Sign Up </Button>
        </form>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2" className="opacity-50" sx={{ paddingBottom: "10px" }}> or you can sign in with </Typography>
          <div className="text-center">
            {socialLinks.map((link, index) => (
              <Link key={index} to={link.href} target="_blank" rel="noopener noreferrer">
                <img className="rounded-pill mx-3 px-3" width={link.width} height={link.height} src={link.src} alt={link.alt} 
                style={{ margin: "0 7px" }} /></Link>
            ))}
          </div>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUp;
