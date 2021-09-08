import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import { useEffect, useState } from "react";
import { getDocuments } from "../api/document";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 15px",
      textAlign: "center",
      paddingTop: "75px",
      flexWrap: "wrap",
      alignItems: "center",
    },

    item: {
      marginBottom: "15px",
      display: "flex",
      justifyContent: "center",
    },
  })
);

export default function Gallery() {
  const classes = useStyles();

  const [documents, setDocuments]: any = useState([]);

  const getDocumentAndSet = async () => {
    const { data }: any = await getDocuments("service");
    console.log(data);
    setDocuments(...data);
  };

  useEffect(() => {
    getDocumentAndSet();
  }, []);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
        <Card title={documents?.c1Title} detail={documents?.c1Des} />
      </Grid>
      <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
        <Card title={documents?.c2Title} detail={documents?.c2Des} />
      </Grid>
      <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
        <Card title={documents?.c3Title} detail={documents?.c3Des} />
      </Grid>
    </Grid>
  );
}
