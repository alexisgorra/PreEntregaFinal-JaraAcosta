import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: 445,
        height: 470,
        transition: "0.2s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: "contain" }}
        image={item.img}
        title="producto"
      />
      <hr />
      <CardContent sx={{ height: 150 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {item.title}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${item.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Más Información
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
