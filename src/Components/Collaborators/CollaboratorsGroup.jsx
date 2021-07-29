import { withStyles } from '@material-ui/core';
import { useStyles } from './Collaborator.style';
import PictureBox from './PictureBox';

const CollaboratorsGroup = ({classes, collaborators}) => {
    return (
        <div className={classes.container}>
            <div className={classes.groupPictureBox}>
                {
                    (collaborators.length <= 3) ?
                        collaborators.map( person => <PictureBox key={person.id} picture={person.picture} /> ) :
                    (collaborators.length>3) ?
                        collaborators.map( person => <PictureBox key={person.id} picture={person.picture} /> ) :
                    null
                }
            </div>
            <div className={classes.groupDetails+' '+((collaborators.length==1)?classes.groupDetails1:(collaborators.length==2)?classes.groupDetails2:(collaborators.length>2)?classes.groupDetails3:null)}><b>{collaborators.length}</b> persons are currently collaborating in this project.</div>
        </div>
    );
}

export default withStyles(useStyles)(CollaboratorsGroup);