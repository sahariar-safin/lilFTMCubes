import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import galleryImage01 from '../images/galleryimage1.png'
import galleryImage02 from '../images/galleryimage2.png'
import galleryImage03 from '../images/galleryimage3.png'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'center',
            paddingTop: '75px',
            flexWrap: 'wrap'
        },

        item: {
            marginBottom: '15px'
        }

    }),
);

export default function Gallery() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
                <img src={galleryImage01} alt="display1"/>
            </Grid>
            <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
                <img src={galleryImage02} alt="display2"/>

            </Grid>
            <Grid item xl={4} md={4} sm={12} xs={12} className={classes.item}>
                <img src={galleryImage03} alt="display3"/>

            </Grid>

        </Grid>
    );
}
