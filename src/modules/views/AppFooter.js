import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>

      {'© '} Do You Remember? 
    
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({

  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    justifyContent: 'center',
    align: 'center',
    display: 'flex',
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light,
  },


}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.container}>

                <Copyright />

    </Typography>
  );
}