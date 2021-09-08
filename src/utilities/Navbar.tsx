import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logoImage from "../images/logo.png";
import { useEffect, useState } from "react";
import { getDocuments } from "../api/document";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    banner: {
      paddingTop: "10px",
      backgroundColor: "#2ea1db",
    },
    button: {
      color: "black",
      fontSize: "20px",
      letterSpacing: "0.1px",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    image: {
      width: "120px",
      height: "100px",
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  const [documents, setDocuments]: any = useState([]);

  const getDocumentAndSet = async () => {
    const { data }: any = await getDocuments("buttonMain");
    console.log(data);
    setDocuments(...data);
  };

  useEffect(() => {
    getDocumentAndSet();
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.banner}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logoImage} className={classes.image} alt="logoImage" />
          </Typography>
          <Button
            className={classes.button}
            href="https://discord.com/invite/zekCue738G"
          >
            {documents?.button1}
          </Button>
          <Button className={classes.button} href="#">
            Gallery
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
