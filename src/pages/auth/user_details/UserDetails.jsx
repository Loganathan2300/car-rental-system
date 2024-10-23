import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Button, TextField, Select, MenuItem} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CircleIcon from "@mui/icons-material/Circle";

const UserDetails = () => {
  return (
      <Box display="flex" padding="80px" paddingTop="30px" paddingBottom="40px" >
        <Box sx={{ width: "300px", backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", border: "1px solid #ddd"}}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar sx={{ width: 80, height: 80, marginBottom: "10px" }} />
            <Typography variant="h6">Loganathan Velumani</Typography>
            <Typography variant="body2">8838398756</Typography>
            <Typography variant="body2">fiwip16098@paxnw.com</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* List Items */}
          <List>
            <ListItem sx={{marginTop:"0px",marginBottom:"0px"}}>
              <ListItemIcon>
                <CancelIcon sx={{ color: "red"}} />
              </ListItemIcon>
              <ListItemText primary="Profile Document" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="Mobile Number" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CancelIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="Paytm Wallet" />
            </ListItem>

            <Divider sx={{ my: 2 }} />

            <ListItem>
              <ListItemIcon>
                <zPointsIcon />
              </ListItemIcon>
              <ListItemText primary="Z-Points" secondary="Install App to use z-points" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Credits" secondary="₹ 0" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary="Paytm Wallet" secondary="Link Wallet" />
            </ListItem>

            <Divider sx={{ my: 2 }} />

            <ListItem>
              <ListItemText primary="My Bookings" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Saved Cards" />
            </ListItem>

            <Divider sx={{ my: 2 }} />

            <ListItem>
              <CircleIcon sx={{ color: "green" }} />
              <ListItemText primary="Account" />
            </ListItem>
          </List>
        </Box>

        {/* Right Section - Account Details */}
        <Box sx={{ flex: 1, marginLeft: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #ddd" }} >
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
               MY ACCOUNT 
          </Typography>
          <Divider sx={{ width: "100%", padding: "0px", margin: "0px" }} />

          {/* Account Details Section */}
          <Box marginBottom="30px" sx={{ paddingTop: "20px" }}>
            <Typography variant="h6" sx={{ marginBottom: "0px", fontSize: "25px", color: "text.secondary" }}>
              Account Details
            </Typography>
            <Divider sx={{ my: 2, mt: 0 }} />
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }} >
              <Typography variant="body2" sx={{ color: "text.secondary", marginBottom: 1, fontSize: "17px", paddingRight: "30px"}} >
                Email* :
                <span style={{ paddingLeft: "50px" }}>
                  fiwip16098@paxnw.com
                </span>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }} >
              <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "17px", paddingRight: "20px", whiteSpace: "nowrap" }}>
                Mobile* :
              </Typography>
              <TextField fullWidth value="8838398756" margin="dense" variant="outlined" InputProps={{ readOnly: true }}
                sx={{ width: "auto", paddingRight: "20px", paddingLeft: "20px"}}/>
            </Box>
          </Box>

          {/* Personal Details Section */}
          <Box marginBottom="30px">
            <Typography variant="h6" sx={{ fontSize: "25px", color: "text.secondary" }} >
              Personal Details
            </Typography>
            <Divider sx={{ my: 2, mt: 1 }} />
            <Box sx={{  display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }} >
                <Typography variant="body2"
                  sx={{ color: "text.secondary", fontSize: "17px", whiteSpace: "nowrap" }}>
                  Name :
                  <span style={{ paddingLeft: "20px" }}>
                    Loganathan Velumani
                  </span>
                </Typography>
              </Box>
              <Select value="Male" margin="dense" sx={{ width: "150px" }}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Box>
          </Box>

          {/* Location Details Section */}
          <Box marginBottom="30px">
            <Typography variant="p"
              sx={{ fontWeight: "", fontSize: "25px", marginBottom: "10px", color: "text.secondary" }} >
              Location Details
            </Typography>
            <Divider sx={{ my: 0, mt: 1 }} />
            <Typography
              sx={{ paddingY: "10px", paddingBottom: "20px", fontSize: "17px", color: "text.secondary" }} >
              Please share your current city for optimized experience
            </Typography>
            <TextField label="City" select value="Coimbatore" margin="dense" variant="outlined" sx={{ width: "25%" }}>
              <MenuItem value="Coimbatore">Coimbatore</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            </TextField>
          </Box>

          {/* Update Button */}
          <Button variant="contained" color="primary" sx={{ width: "15%" }}>
            Update
          </Button>
        </Box>
      </Box>
  );
};

export default UserDetails;

//  {/* <Typography variant="p" sx={{ marginBottom: '0px',fontSize:"20px" }}> Email : </Typography>
//         <TextField
//           fullWidth
//           label="Email"
//           value="fiwip16098@paxnw.com"
//           margin="dense"
//           variant="outlined"
//           InputProps={{ readOnly: true }}
//         /> */}
//         {/* <TextField
//           fullWidth
//           label="Mobile"
//           value="8838398756"
//           margin="dense"
//           variant="outlined"
//           InputProps={{ readOnly: true }}
//         /> */}

// import React from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Avatar,
//   Button,
//   TextField,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import CircleIcon from "@mui/icons-material/Circle";

// const UserDetails = () => {
//   return (
//     <Box
      // display="flex"
      // flexDirection={{ xs: "column", md: "row" }}
      // padding={{ xs: "20px", md: "80px" }}
//     //   paddingTop="30px"
//     //   paddingBottom="40px"
//     >
//       {/* Sidebar */}
//       <Box
//         sx={{
//           width: { xs: "100%", md: "300px" },
//           backgroundColor: "#ffffff",
//           padding: "20px",
//           borderRadius: "8px",
//           border: "1px solid #ddd",
//           marginBottom: { xs: "20px", md: "0" },
//         }}
//       >
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Avatar sx={{ width: 80, height: 80, marginBottom: "10px" }} />
//           <Typography variant="h6">Loganathan Velumani</Typography>
//           <Typography variant="body2">8838398756</Typography>
//           <Typography variant="body2">fiwip16098@paxnw.com</Typography>
//         </Box>
//         <Divider sx={{ my: 2 }} />
//         {/* List Items */}
//         <List>
//           <ListItem sx={{ marginTop: "0px", marginBottom: "0px" }}>
//             <ListItemIcon>
//               <CancelIcon sx={{ color: "red" }} />
//             </ListItemIcon>
//             <ListItemText primary="Profile Document" />
//           </ListItem>
//           <ListItem>
//             <ListItemIcon>
//               <CheckCircleIcon sx={{ color: "green" }} />
//             </ListItemIcon>
//             <ListItemText primary="Mobile Number" />
//           </ListItem>
//           <ListItem>
//             <ListItemIcon>
//               <CancelIcon sx={{ color: "red" }} />
//             </ListItemIcon>
//             <ListItemText primary="Paytm Wallet" />
//           </ListItem>

//           <Divider sx={{ my: 2 }} />

//           <ListItem>
//             <ListItemIcon>
//               {/* Icon for Z-Points */}
//             </ListItemIcon>
//             <ListItemText
//               primary="Z-Points"
//               secondary="Install App to use z-points"
//             />
//           </ListItem>
//           <ListItem>
//             <ListItemIcon>
//               <AttachMoneyIcon />
//             </ListItemIcon>
//             <ListItemText primary="Credits" secondary="₹ 0" />
//           </ListItem>
//           <ListItem>
//             <ListItemIcon>
//               <AccountBalanceWalletIcon />
//             </ListItemIcon>
//             <ListItemText primary="Paytm Wallet" secondary="Link Wallet" />
//           </ListItem>

//           <Divider sx={{ my: 2 }} />

//           <ListItem>
//             <ListItemText primary="My Bookings" />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="Saved Cards" />
//           </ListItem>

//           <Divider sx={{ my: 2 }} />

//           <ListItem>
//             <CircleIcon sx={{ color: "green" }} />
//             <ListItemText primary="Account" />
//           </ListItem>
//         </List>
//       </Box>

//       {/* Right Section - Account Details */}
//       <Box
//         sx={{
//           flex: 1,
//           marginLeft: { xs: "0", md: "20px" },
//           padding: "20px",
//           backgroundColor: "#fff",
//           borderRadius: "8px",
//           border: "1px solid #ddd",
//         }}
//       >
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: "bold",
//             marginBottom: "20px",
//             textAlign: "center",
//           }}
//         >
//           MY ACCOUNT
//         </Typography>
//         <Divider sx={{ width: "100%", padding: "0px", margin: "0px" }} />

//         {/* Account Details Section */}
//         <Box marginBottom="30px" sx={{ paddingTop: "20px" }}>
//           <Typography
//             variant="h6"
//             sx={{
//               marginBottom: "0px",
//               fontSize: "25px",
//               color: "text.secondary",
//             }}
//           >
//             Account Details
//           </Typography>
//           <Divider sx={{ my: 2, mt: 0 }} />
//           <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "text.secondary",
//                 marginBottom: 1,
//                 fontSize: "17px",
//                 paddingRight: "30px",
//               }}
//             >
//               Email* :
//               <span style={{ paddingLeft: "50px" }}>fiwip16098@paxnw.com</span>
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "text.secondary",
//                 fontSize: "17px",
//                 paddingRight: "20px",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Mobile* :
//             </Typography>
//             <TextField
//               fullWidth
//               value="8838398756"
//               margin="dense"
//               variant="outlined"
//               InputProps={{ readOnly: true }}
//               sx={{
//                 width: { xs: "100%", md: "auto" },
//                 paddingRight: "20px",
//                 paddingLeft: "20px",
//               }}
//             />
//           </Box>
//         </Box>

//         {/* Personal Details Section */}
//         <Box marginBottom="30px">
//           <Typography
//             variant="h6"
//             sx={{ fontSize: "25px", color: "text.secondary" }}
//           >
//             Personal Details
//           </Typography>
//           <Divider sx={{ my: 2, mt: 1 }} />
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               flexWrap: "wrap",
//             }}
//           >
//             <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "text.secondary",
//                   fontSize: "17px",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 Name :
//                 <span style={{ paddingLeft: "20px" }}>Loganathan Velumani</span>
//               </Typography>
//             </Box>
//             <Select value="Male" margin="dense" sx={{ width: { xs: "100%", md: "150px" } }}>
//               <MenuItem value="Male">Male</MenuItem>
//               <MenuItem value="Female">Female</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </Select>
//           </Box>
//         </Box>

//         {/* Location Details Section */}
//         <Box marginBottom="30px">
//           <Typography
//             variant="p"
//             sx={{
//               fontWeight: "",
//               fontSize: "25px",
//               marginBottom: "10px",
//               color: "text.secondary",
//             }}
//           >
//             Location Details
//           </Typography>
//           <Divider sx={{ my: 0, mt: 1 }} />
//           <Typography
//             sx={{
//               paddingY: "10px",
//               paddingBottom: "20px",
//               fontSize: "17px",
//               color: "text.secondary",
//             }}
//           >
//             Please share your current city for an optimized experience
//           </Typography>
//           <TextField
//             label="City"
//             select
//             value="Coimbatore"
//             margin="dense"
//             variant="outlined"
//             sx={{ width: { xs: "100%", md: "25%" } }}
//           >
//             <MenuItem value="Coimbatore">Coimbatore</MenuItem>
//             <MenuItem value="Chennai">Chennai</MenuItem>
//             <MenuItem value="Bangalore">Bangalore</MenuItem>
//             <MenuItem value="Hyderabad">Hyderabad</MenuItem>
//           </TextField>
//         </Box>

//         {/* Update Button */}
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ width: { xs: "100%", md: "15%" } }}
//         >
//           Update
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default UserDetails;

// 2type


// import React from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Avatar,
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   Grid,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import CircleIcon from "@mui/icons-material/Circle";

// const UserDetails = () => {
//   return (
//     <Box padding="30px">
//       <Grid container spacing={3}>
//         {/* Left Section - User Details */}
//         <Grid item xs={12} sm={4} md={3} lg={3}>
//           <Box
//             sx={{
//               backgroundColor: "#ffffff",
//               padding: "20px",
//               borderRadius: "8px",
//               border: "1px solid #ddd",
//               // paddingX:"20px"
//             }}
//           >
//             <Box display="flex" flexDirection="column" alignItems="center">
//               <Avatar sx={{ width: 80, height: 80, marginBottom: "10px" }} />
//               <Typography variant="h6">Loganathan Velumani</Typography>
//               <Typography variant="body2">8838398756</Typography>
//               <Typography variant="body2">fiwip16098@paxnw.com</Typography>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             {/* List Items */}
//             <List>
//               <ListItem>
//                 <ListItemIcon>
//                   <CancelIcon sx={{ color: "red" }} />
//                 </ListItemIcon>
//                 <ListItemText primary="Profile Document" />
//               </ListItem>
//               <ListItem>
//                 <ListItemIcon>
//                   <CheckCircleIcon sx={{ color: "green" }} />
//                 </ListItemIcon>
//                 <ListItemText primary="Mobile Number" />
//               </ListItem>
//               <ListItem>
//                 <ListItemIcon>
//                   <CancelIcon sx={{ color: "red" }} />
//                 </ListItemIcon>
//                 <ListItemText primary="Paytm Wallet" />
//               </ListItem>

//               <Divider sx={{ my: 2 }} />

//               <ListItem>
//                 <ListItemIcon>
//                   <CircleIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Z-Points" secondary="Install App to use z-points" />
//               </ListItem>
//               <ListItem>
//                 <ListItemIcon>
//                   <AttachMoneyIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Credits" secondary="₹ 0" />
//               </ListItem>
//               <ListItem>
//                 <ListItemIcon>
//                   <AccountBalanceWalletIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Paytm Wallet" secondary="Link Wallet" />
//               </ListItem>

//               <Divider sx={{ my: 2 }} />

//               <ListItem>
//                 <ListItemText primary="My Bookings" />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Saved Cards" />
//               </ListItem>

//               <Divider sx={{ my: 2 }} />

//               <ListItem>
//                 <ListItemText primary="Account" />
//               </ListItem>
//             </List>
//           </Box>
//         </Grid>

//         {/* Right Section - Account Details */}
//         <Grid item xs={12} sm={8} md={9} lg={8}>
//           <Box
//             sx={{
//               padding: "20px",
//               backgroundColor: "#fff",
//               borderRadius: "8px",
//               border: "1px solid #ddd",
//             }}
//           >
//             <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
//               MY ACCOUNT
//             </Typography>
//             <Divider sx={{ width: "100%", margin: "0" }} />

//             {/* Account Details Section */}
//             <Box marginBottom="30px" sx={{ paddingTop: "20px" }}>
//               <Typography variant="h6" sx={{ marginBottom: "0", fontSize: "25px", color: "text.secondary" }}>
//                 Account Details
//               </Typography>
//               <Divider sx={{ my: 2, mt: 0 }} />
//               <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
//                 <Typography variant="body2" sx={{ color: "text.secondary", marginBottom: 1, fontSize: "17px", paddingRight: "30px" }}>
//                   Email* :
//                   <span style={{ paddingLeft: "50px" }}>
//                     fiwip16098@paxnw.com
//                   </span>
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
//                 <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "17px", paddingRight: "20px", whiteSpace: "nowrap" }}>
//                   Mobile* :
//                 </Typography>
//                 <TextField
//                   // fullWidth
//                   value="8838398756"
//                   margin="dense"
//                   variant="outlined"
//                   InputProps={{ readOnly: true }}
//                   sx={{ width: "25%"}}
//                 />
//               </Box>
//             </Box>

//             {/* Personal Details Section */}
//             <Box marginBottom="30px">
//               <Typography variant="h6" sx={{ fontSize: "25px", color: "text.secondary" }}>
//                 Personal Details
//               </Typography>
//               <Divider sx={{ my: 2, mt: 1 }} />
//               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
//                   <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "17px", whiteSpace: "nowrap" }}>
//                     Name :
//                     <span style={{ paddingLeft: "20px" }}>
//                       Loganathan Velumani
//                     </span>
//                   </Typography>
//                 </Box>
//                 <Select value="Male" margin="dense" sx={{ width: "150px" }}>
//                   <MenuItem value="Male">Male</MenuItem>
//                   <MenuItem value="Female">Female</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                 </Select>
//               </Box>
//             </Box>

//             {/* Location Details Section */}
//             <Box marginBottom="30px">
//               <Typography variant="h6" sx={{ fontSize: "25px", marginBottom: "10px", color: "text.secondary" }}>
//                 Location Details
//               </Typography>
//               <Divider sx={{ my: 0, mt: 1 }} />
//               <Typography sx={{ paddingY: "10px", paddingBottom: "20px", fontSize: "17px", color: "text.secondary" }}>
//                 Please share your current city for optimized experience
//               </Typography>
//               <TextField label="City" select value="Coimbatore" margin="dense" variant="outlined" sx={{ width: "25%" }}>
//                 <MenuItem value="Coimbatore">Coimbatore</MenuItem>
//                 <MenuItem value="Chennai">Chennai</MenuItem>
//                 <MenuItem value="Bangalore">Bangalore</MenuItem>
//                 <MenuItem value="Hyderabad">Hyderabad</MenuItem>
//               </TextField>
//             </Box>

//             {/* Update Button */}
//             <Button variant="contained" color="primary" sx={{ width: "15%" }}>
//               Update
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default UserDetails;
