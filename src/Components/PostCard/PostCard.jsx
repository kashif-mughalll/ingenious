import { withStyles } from "@material-ui/core"
import { useStyles } from "./postCard.style";
import Chips from './../Chips/Chips';
import image from './../../Assests/Authpic1.png';
import {ShowModal} from '../../Redux/Modal/ModalActions'
import { connect } from "react-redux";
import ProjectDetailsForm from "../ProjectDetailsForm/ProjectDetailsForm";

const PostCard = ({classes, ShowModal, id, match, postedBy, postedAt, duration, location, title, description, keywords, editable=false, onEdit=null, onDelete=null, onLike=null, onComment=null}) => {
    return(
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.author}>
                    <div className={classes.avatar}>
                        <img src={postedBy.picture} alt="Author Image" />
                    </div>
                    <div className={classes.mainHead}>
                        <div className={classes.authName}>{postedBy.name}</div>
                        <div className={classes.location}><i className="fas fa-map-marker-alt"></i>{location}</div>
                    </div>
                </div>
                <div className={classes.dates}>
                    <div className={classes.postDate}><b>Posted At: </b>{postedAt}</div>
                    <div className={classes.duration}><b>Duration: </b>{duration}</div>
                </div>
            </div>
            <div className={classes.description}>
                <div className={classes.projectTitle}>{title}</div>
                <div className={classes.projectDescription}>{description}</div>
                <div className={classes.projectDomain}>
                    {keywords.map((name)=><Chips key={name} name={name} />)}
                </div>
            </div>
            <div className={classes.footer}>
                {
                    editable?
                    <>
                        <div className="edit" onClick={onEdit}><b><i className="fas fa-pencil-alt"></i>Edit</b></div>
                        <div className="delete" onClick={onDelete}><b><i className="far fa-trash-alt"></i>Delete</b></div>
                    </>
                    :
                    <>
                        <div className="like" onClick={onLike}><b><i className="fas fa-thumbs-up"></i>Like</b></div>
                        <div className="comment" onClick={onComment}><b><i className="fas fa-comments"></i>Comments</b></div>
                        <div className="collaborate" onClick={()=> ShowModal(ProjectDetailsForm)}><b><i className="fas fa-user-plus"></i>Collaborate</b></div>
                    </>
                }
            </div>
        </div>
    )
}

const actions = {
    ShowModal
}

export default connect(null,actions)(withStyles(useStyles)(PostCard));