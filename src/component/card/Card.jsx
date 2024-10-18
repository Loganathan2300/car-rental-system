import React from "react";
import { Card as MuiCard, CardContent, CardMedia, Typography, Box } from "@mui/material";

const Card = ({
  children,
  title,
  subtitle,
  image,
  className,
  cardContentVariant = "body2", // Default value
  cardContentVariantSubtitle = "caption", // Default value
  sx,
  classNameCardContent,
  width = 70, // Default width
  height = 70, // Default height
  src,
  alt = "Image", // Default alt text
  classNameHeader,
  textName,
  sxTextName,
}) => {
  return (
    <MuiCard className={className} sx={sx}>
      {image && (
        <CardMedia component="img" height="140" image={image} alt={alt} />
      )}
      <CardContent>
        <Box textAlign="center">
          {src && (
            <img className={classNameCardContent} width={width} height={height} src={src} alt={alt} />
          )}
          {textName && (
            <Typography variant="h5" sx={sxTextName} className={classNameHeader}>
              {textName}
            </Typography>
          )}
        </Box>
        {title && (
          <Typography variant={cardContentVariant} component="div">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant={cardContentVariantSubtitle} color="text.secondary">
            {subtitle}
          </Typography>
        )}
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card;



// import React from "react";
// import { Card as MuiCard, CardContent, CardMedia, Typography, Box} from "@mui/material";

// const Card = ({ children, title, subtitle, image, className,cardContent_variant,cardContent_variant1,sx,className_CardContent,width,height,src,alt,className_header,textName,sx_textName }) => {
//   return (
//     <MuiCard className={className} sx={sx}>
//       {/* {image && (
//         <CardMedia  component="img" height="140" image={image} alt={title} />
//       )} */}
//       <CardContent>
//         <Box textAlign="center">
//           <img className={className_CardContent} width={width} height={height} src={src} alt={alt} />
//           <Typography variant="h5" sx={sx_textName} className={className_header}>{textName}</Typography>
//         </Box>
//         {children}
//       </CardContent>
//       {/* <CardContent>
//         {title && ( <Typography variant={cardContent_variant} component="div">
//             {title}
//           </Typography>
//         )}
//         {subtitle && (
//           <Typography variant={cardContent_variant1} color="text.secondary">
//             {subtitle}
//           </Typography>
//         )}
//         {children}
//       </CardContent> */}
//     </MuiCard>
//   );
// };

// export default Card;