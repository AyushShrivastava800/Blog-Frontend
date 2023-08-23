import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
export default function MediaCard() {
  return (
    <Card className="blogCards">
      <CardMedia
        className="Cardmedia"
        image="https://assets.maccarianagency.com/backgrounds/img23.jpg"
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Eiusmod tempor incididunt
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </Typography>
      </CardContent>
      <CardActions className="CardActions">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography variant="body1" color="text.secondary" size="small">
          Clara timothy
        </Typography>
      </CardActions>
    </Card>
  );
}
