import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { PhotoCamera } from "@mui/icons-material";
import Box from "@mui/material/Box";

export default function Cards({ description, name }) {
  return (
    <Card
      sx={{
        maxWidth: 1600,
        minWidth: 1400,
        maxHeight: 1000,
        minHeight: 400,
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <CardMedia
          sx={{
            height: "100%",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F5F5F5",
          }}
          component="div"
        >
          <PhotoCamera fontSize="large" />
        </CardMedia>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
