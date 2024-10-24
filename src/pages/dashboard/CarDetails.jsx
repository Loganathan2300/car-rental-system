import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useGetCarQuery } from "../redux/service/CarData";
import background_img from "../../assets/image/image_2024_10_16T11_18_58_435Z.png";
import { NordicWalking, Star } from "@mui/icons-material";

const CarDetails = () => {
  const { data: responseData, error, isLoading } = useGetCarQuery();
  console.log(responseData?.data);

  if (isLoading)
    return <CircularProgress sx={{ textAlign: "center", width: "100%" }} />;
  if (error) {
    console.error("Error loading cars:", error);
    return <div>Error loading cars: {error.message}</div>;
  }
  const cars = responseData?.data || [];
  return (
    <Grid container spacing={2} sx={{ paddingX: { xs: "10px", sm: "20px", md: "30px", lg: "50px" }, paddingY: "10px" }}>
      {cars.map((car) => {
        const mimeType =
          car.imageFormat === "png"
            ? "image/png"
            : car.imageFormat === "jpeg" || car.imageFormat === "jpg"
            ? "image/jpeg"
            : car.imageFormat === "gif"
            ? "image/gif"
            : car.imageFormat === "svg"
            ? "image/svg+xml"
            : "application/octet-stream";

        const imageSrc = car.image
          ? `data:${mimeType};base64,${car.image}`
          : background_img;

        return (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
              <CardMedia
                component="img"
                height="240"
                image={imageSrc}
                alt={car?.carModel}
                sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
              />
              <CardContent>
                <Box display="flex" alignItems="center" mb={0}>
                  <Box display="flex" alignItems="center">
                    <Typography variant="body2" color="success.main" sx={{ display: "flex", alignItems: "center" }} >
                      <Star sx={{ marginRight: 0.5 }} />
                      {car.rating || 2}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }} >
                      {car.trips || 0} Trips
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ paddingX: "5px" }} mt={0}>
                  <Typography variant="h6" sx={{ flexGrow: 1, fontSize: { xs: '1rem', sm: '1.25rem' } }}>{car?.carModel}</Typography>
                  <Box textAlign="right">
                    <Typography variant="h5" sx={{ marginBottom: 0 }}>
                      ₹{car.rate || 190}/hr
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{car.totalRate || 760} excluding fees
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ paddingX: "5px" }}>
                  <strong>Year: {car.year || 2023}</strong>
                  <br />
                  {car.transmission || "Manual"} • {car.fuelType || "Petrol"} •{" "}
                  {car.seats || 7} Seats
                </Typography>

                <Box display="flex" alignItems="center" mt={1}>
                  <NordicWalking sx={{ marginRight: 1 }} />
                  <Typography variant="body2">
                    {car.distance || "8.2 km"} away
                  </Typography>
                </Box>

                <Button variant="contained" color="success" size="small" sx={{ mt: 2, width: { xs: "100%", sm: "30%" } }}>
                  ACTIVE FASTAG
                </Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CarDetails;



// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, Grid, CircularProgress } from '@mui/material';
// import { useGetCarQuery } from '../redux/service/CarData';
// import background_img from '../../assets/image/image_2024_10_16T11_18_58_435Z.png';

// const CarDetails = () => {
//     const { data: responseData, error, isLoading } = useGetCarQuery();

//     console.log('Response Data:', responseData);

//     const cars = responseData?.data || [];

//     if (isLoading) return <CircularProgress sx={{ textAlign: "center" }} />;
//     if (error) {
//         console.error("Error loading cars:", error);
//         return <div>Error loading cars: {error.message}</div>;
//     }

//     return (
//         <Grid container spacing={2}>
//             {cars.map(car => {
//                 const mimeType = car.imageFormat === 'png' ? 'image/png' :
//                                  car.imageFormat === 'jpeg' || car.imageFormat === 'jpg' ? 'image/jpeg' :
//                                  car.imageFormat === 'gif' ? 'image/gif' :
//                                  car.imageFormat === 'svg' ? 'image/svg+xml' :
//                                  'application/octet-stream';

//                                  const imageSrc = car.image ? `data:${mimeType};base64,${car.image}` : background_img;

//                 return (
//                     <Grid item xs={12} sm={6} md={4} key={car.id}>
//                         <Card>
//                             <CardMedia component="img" alt={car?.carModel} image={imageSrc} height="260px"/>
//                             <CardContent>
//                                 <Typography variant="h4" component="div">
//                                     {car?.carModel}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     Car Type: {car?.carType}
//                                 </Typography>
//                                 <Typography variant="h6" color="primary">
//                                     Rate: ${car?.rate} <span className='fs-6'>/per hour</span>
//                                 </Typography>
//                                 <Typography variant="body2">
//                                     Seats: {car?.seats}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 );
//             })}
//         </Grid>
//     );
// };

// export default CarDetails;
