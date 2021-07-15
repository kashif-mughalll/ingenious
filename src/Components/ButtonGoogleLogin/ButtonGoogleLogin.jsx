import { Button, Icon, withStyles } from "@material-ui/core"
import { useStyles } from "./ButtonGoogle.style";

const ButtonGoogleLogin = ({classes}) => {
    return(
        <Button
          variant="outlined"
          color="primary"
          fullWidth 
          className={classes.googleButton}
          startIcon={<Icon>send</Icon>}
        >
          Login With Google
        </Button>
    )
}
export default withStyles(useStyles)(ButtonGoogleLogin);