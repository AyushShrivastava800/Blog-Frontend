import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function blogcards({ id,title, body, Image, author, date }) {
  return (
    <Card className="blogCards" elevation={0}>
      <Link to={{ pathname: `/blogs/${id}` }} className="blogCardLink">
        <CardActionArea>
          <CardMedia
            className="cardMedia"
            component="img"
            image={Image}
            alt="green iguana"
          />
          <CardContent className="cardContent">
            <Typography gutterBottom className="cardtitle">
              {title}
            </Typography>
            <Typography color="text.secondary" className="cardbody">
              {body}
            </Typography>
          </CardContent>
          <CardContent className="authorBox">
            <Avatar alt="Cindy Baker" src="#" />
            <Box>
              <Typography className="author">{author}</Typography>
              <Typography className="author-date">{date}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
