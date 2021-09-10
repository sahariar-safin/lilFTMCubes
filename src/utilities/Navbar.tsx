import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Text, Link } from "@chakra-ui/react";
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
    icon: {
      fontSize: "25px",
      letterSpacing: "0.1px",
      cursor: "pointer",
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
          <Text className={classes.icon} color="white" me="10px">
            <Link href="https://twitter.com/LilFTMCubes">
              <i className="fab fa-twitter"></i>
            </Link>
          </Text>
          <Text className={classes.icon} color="white" me="10px">
            <Link href="http://discord.gg/zekCue738G">
              <i className="fab fa-discord"></i>
            </Link>
          </Text>
          <Button className={classes.button} href={documents?.btn3Url}>
            {documents?.button3}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
