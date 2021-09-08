import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: '350px'
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  title: String;
  detail: String;

};

export default function SimpleCard({title, detail}: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Typography variant="h5" component="h1" style={{paddingBottom: '20px'}}>
            {title}
        </Typography>
       
        <Typography variant="body2" component="p">
          {detail}
        </Typography>
      </CardContent>

    </Card>
  );
}
