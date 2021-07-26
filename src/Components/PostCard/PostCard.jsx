import { withStyles } from "@material-ui/core"
import { useStyles } from "./postCard.style";
import Chips from './../Chips/Chips';
import image from './../../Assests/Authpic1.png';
import {ShowModal} from '../../Redux/Modal/ModalActions'
import { connect } from "react-redux";
import ProjectDetailsForm from "../ProjectDetailsForm/ProjectDetailsForm";

const PostCard = ({classes,ShowModal}) => {
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
                <div className="like"><b><i class="fas fa-thumbs-up"></i>Like</b></div>
                <div className="comment"><b><i class="fas fa-comments"></i>Comments</b></div>
                <div className="collaborate" onClick={()=> ShowModal(ProjectDetailsForm)}><b><i class="fas fa-user-plus"></i>Collaborate</b></div>
            </div>
        </div>
    )
}

const actions = {
    ShowModal
}

export default connect(null,actions)(withStyles(useStyles)(PostCard));