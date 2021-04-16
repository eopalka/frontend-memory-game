import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import AppForm from '../modules/views/AppForm';
import { email, required } from '../modules/form/validation';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn() {
  const classes = useStyles();
  const [state, setState] = React.useState({
      username: "",
  });

  const handleChange = e => {
    setState({ 
        ...state, [e.target.name]: e.target.value 
      })
  }

  const handleSubmit = () => {
      debugger
    setState(true);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Who is you?
          </Typography>
        </React.Fragment>
        <Form onSubmit={handleSubmit}  >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={classes.form} >
              <Field
                autoComplete="username"
                autoFocus
                component={RFTextField}
                fullWidth
                label="Name"
                margin="normal"
                name="username"
                required
                size="large"
                value={ state.username }
                onChange={ (e) => handleChange(e) }
              />
              <FormButton
                className={classes.button}
                size="large"
                color="secondary"
                fullWidth
              >
                Sign In
              </FormButton>
            </form>
          )}
        </Form>

      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);