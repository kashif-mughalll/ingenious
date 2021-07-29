import { withStyles } from '@material-ui/core';
import { useStyles } from './Collaborator.style';
import PictureBox from './PictureBox';

const Collaborator = ({ classes, person }) => {
    return (
        <div className={classes.container}>
            <PictureBox picture={person.picture} />
            <div className={classes.details}><b>{person.name}</b> is collaborating in <b>{person.keywords.join(", ")}</b></div>
        </div>
    );
}

export default withStyles(useStyles)(Collaborator);