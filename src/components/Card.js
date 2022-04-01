import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderColor: "#EBF2F2",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Card xs={12} md={4} className={classes.root}>
          <CardActionArea className="card_content">
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Fast Services
              </Typography>
              <Typography variant="body2"  component="p">
                We offer fast and reliable services to our users and ensure user
                friendly services
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card xs={12} md={4} className={classes.root}>
          <CardActionArea className="card_content">
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/8358041/pexels-photo-8358041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Contemplative Reptile"
            />
            <CardContent className="card_color">
              <Typography gutterBottom variant="h5" component="h2">
                P2P
              </Typography>
              <Typography variant="body2"  component="p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, nisi?
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card xs={12} md={4} className={classes.root}>
          <CardActionArea className="card_content">
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/8358034/pexels-photo-8358034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                various coin choices.
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
                maiores.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
