import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import galleryImage from '../images/galleryimage5.png'
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'center',
            padding: '0 10px',
            paddingTop: '85px',
            flexWrap: 'wrap'
        },

        item: {
            marginBottom: '35px',
            display: 'flex',
            justifyContent: 'center'
        }

    }),
);

export default function Gallery() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xl={12} md={12} sm={12} xs={12} className={classes.item}>
                <img src={galleryImage} alt="blockchain" />
            </Grid>

            <Grid item xl={12} md={12} sm={12} xs={12} className={classes.item}>
                
                <IconButton href="https://twitter.com/LilFTMCubes" target="_blank" style={{color: '#000'}}>
                    <TwitterIcon/>
                </IconButton>
                
            </Grid>

        </Grid>
    );
}
