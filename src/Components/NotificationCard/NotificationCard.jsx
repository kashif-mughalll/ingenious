import { withStyles } from "@material-ui/core"
import { useStyles } from "./notification.style"

const NotificationCard = ({classes}) => {
    return(
        <div className={classes.container}>
            <div className={classes.avatar}>
                <img src='https://lh3.googleusercontent.com/a/AATXAJx2fgugwnoZvRc4XfDw_Ency8C0waYu6y1UziFj=s96-c' alt="profile picture" />
            </div>
            <div className={classes.details}>
                Muhammad Hamza Siddiqui has requested you to collaborate in your project 'Ecommerce Web App' as a developer, designer, and investor
            </div>
            <div className={classes.buttons}>
                <button>Accept</button>
                <button>Reject</button>
            </div>
        </div>
    )
}
export default withStyles(useStyles)(NotificationCard)