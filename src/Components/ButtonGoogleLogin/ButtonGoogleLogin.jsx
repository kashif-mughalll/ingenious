import { Button, Icon, withStyles } from "@material-ui/core"
import { useStyles } from "./ButtonGoogle.style";
import { connect } from 'react-redux';
import { SignInWithGoogle } from './../../Redux/Auth/authActions';

const ButtonGoogleLogin = ({classes,SignInWithGoogle}) => {
    return(
        <Button
          onClick={SignInWithGoogle}
          variant="outlined"
          color="primary"
          fullWidth 
          className={classes.googleButton}
          startIcon={<i className="fab fa-google-plus-g" style={{color: 'rgb(160, 76, 76)'}}></i>}
        >
          Login With Google
        </Button>
    )
}

const actions = {
  SignInWithGoogle
}

export default connect(null,actions)(withStyles(useStyles)(ButtonGoogleLogin));