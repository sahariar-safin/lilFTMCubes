import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import MintButtons from "./Mint";
import { getDocuments } from "../api/document";
import { useEffect, useState } from "react";
import img from "../images/ftmcubegif.gif";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: "center",
      padding: "0 10px",
      paddingTop: "25px",
    },
    header: {
      fontSize: "80px",
      color: "#fff",
    },
    detail: {
      fontSize: "20px",
      color: "black",
      paddingTop: "30px",
      maxWidth: "550px",
      textAlign: "left",
    },
    img: {
      width: "200px",
      margin: "0 auto",
    },
  })
);

export default function Home() {
  const classes = useStyles();

  const [buttons, setbuttons]: any = useState([]);
  const [heading, setheading]: any = useState([]);

  const getButtonsAndSet = async () => {
    const { data }: any = await getDocuments("button");
    setbuttons(...data);
  };

  const getHeadingsAndSet = async () => {
    const { data }: any = await getDocuments("heading");
    setheading(...data);
  };

  useEffect(() => {
    getButtonsAndSet();
    getHeadingsAndSet();
  }, []);

  return (
    <Grid className={classes.root}>
      <h1 className={classes.header}>{heading?.title}</h1>
      <img
        src={img}
        className={`${classes.img} img-fluid text-center`}
        alt=""
      />
      <p className={classes.detail}>{heading?.des}</p>
      <MintButtons />
      <p className={classes.detail}>{buttons.button4}</p>
      <p className={classes.detail}>{buttons.button5}</p>
      <p className={classes.detail}>{buttons.button6}</p>
    </Grid>
  );
}
