import { withStyles } from "@material-ui/core"
import { useStyles } from "./postCard.style";
import Chips from './../Chips/Chips';
import image from './../../Assests/Authpic1.png';
import {ShowModal} from '../../Redux/Modal/ModalActions'
import { connect } from "react-redux";
import ProjectDetailsForm from "../ProjectDetailsForm/ProjectDetailsForm";

const PostCard = ({classes, ShowModal, editable=false, onEdit=null, onDelete=null, onLike=null, onComment=null}) => {
    const arr = ['javascript', 'react', 'angular', 'mongoDB', 'css']
    return(
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.author}>
                    <div className={classes.avatar}>
                        <img src={image} alt="Author Image" />
                    </div>
                    <div className={classes.mainHead}>
                        <div className={classes.authName}>Muhammad Hamza Siddiqui</div>
                        <div className={classes.location}><i class="fas fa-map-marker-alt"></i>Pakistan</div>
                    </div>
                </div>
                <div className={classes.dates}>
                    <div className={classes.postDate}><b>Posted At: </b>12 Mar 2021</div>
                    <div className={classes.duration}><b>Duration: </b>01 Apr 2021 - 30 Apr 2021</div>
                </div>
            </div>
            <div className={classes.description}>
                <div className={classes.projectTitle}>Responsive Web App</div>
                <div className={classes.projectDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ullam eos nulla beatae, tempora necessitatibus distinctio alias esse porro consectetur corrupti quia sapiente earum perferendis aliquam doloribus sunt, itaque voluptatum.
                </div>
                <div className={classes.projectDomain}>
                    {arr.map((name)=><Chips name={name} />)}
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