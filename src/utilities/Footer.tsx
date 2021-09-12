import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import logoImage from "../images/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
      paddingTop: "75px",
      flexWrap: "wrap",
    },

    item: {
      marginBottom: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "120px",
      height: "100px",
    },
  })
);

export default function Gallery() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xl={6} md={6} sm={12} xs={12} className={classes.item}>
        <img src={logoImage} className={classes.image} alt="logoImage" />
      </Grid>
      <Grid item xl={6} md={6} sm={12} xs={12} className={classes.item}>
        Brought to you by: Lil’ FTM Cubes & Endless Crypto
      </Grid>
    </Grid>
  );
}
