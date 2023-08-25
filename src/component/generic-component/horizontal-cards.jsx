import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Avatar, Box, Divider, Grid } from "@mui/material";
export default function HorizontalCards() {
  return (
    <Card className="HorizontalCards">
      <Grid container>
        <Grid
          item
          sm={6}
          xs={12}
          order={{ xs: 2, sm: 1 }}
          className="contentGrid"
        >
        
          <Box>
            <Typography gutterBottom variant="h4">
              Eiusmod tempor incididun
            </Typography>
          <Box>
            <Typography variant="body1" color="text.secondary">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
            </Typography>
          </Box>
          </Box>
          <Divider variant="middle mt-18 mb-18"></Divider>
          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography variant="body1" color="text.secondary" size="small">
              Clara timothy
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={6} xs={12} order={{ xs: 1, sm: 2 }}>
          <CardMedia
            className="Cardmedia"
            image="https://images.unsplash.com/photo-1545316443-94ba72b76f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            title="green iguana"
          />
      
        </Grid>
      </Grid>
    </Card>
  );
}
