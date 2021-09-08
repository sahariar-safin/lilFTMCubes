import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDocuments } from "../api/document";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
      paddingTop: "45px",
      flexWrap: "wrap",
    },
    button01: {
      background: `linear-gradient(135deg,rgb(6,147,227) 0%,rgb(243,133,139) 52%,rgb(155,81,224) 100%)`,
      color: "#1757c6",
      width: "150px",
      height: "50px",
      border: "2px solid black",
      fontSize: "20px",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    button02: {
      background: `linear-gradient(90deg,rgb(6,147,227) 0%,rgb(141,236,120) 58%,rgb(155,81,224) 100%)`,
      color: "#ffffff",
      width: "150px",
      height: "50px",
      border: "2px solid black",
      fontSize: "20px",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    button03: {
      background: `linear-gradient(135deg,rgb(6,147,227) 0%,rgb(246,204,105) 48%,rgb(155,81,224) 100%)`,
      color: "#3a4ee8",
      width: "150px",
      height: "50px",
      border: "2px solid black",
      fontSize: "20px",
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    item: {
      marginBottom: "15px",
    },
  })
);

export default function Mint() {
  const classes = useStyles();

  const [documents, setDocuments]: any = useState([]);

  const getDocumentAndSet = async () => {
    const { data }: any = await getDocuments("button");
    setDocuments(...data);
  };
  console.log(documents);

  useEffect(() => {
    getDocumentAndSet();
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
        <Button variant="outlined" size="large" className={classes.button01}>
          {documents.button1}
        </Button>
      </Grid>
      <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
        <Button variant="outlined" size="large" className={classes.button01}>
          {documents.button2}
        </Button>
      </Grid>
      <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
        <Button variant="outlined" size="large" className={classes.button01}>
          {documents.button3}
        </Button>
      </Grid>
    </Grid>
  );
}
