import { withStyles } from '@material-ui/core';
import { useStyles } from './Collaborator.style';

const PictureBox = ({ classes, picture }) => {
    return (
        <div className={classes.pictureBox}>
            <img src={picture} alt="collaborator image"/>
        </div>
    );
}

export default withStyles(useStyles)(PictureBox);