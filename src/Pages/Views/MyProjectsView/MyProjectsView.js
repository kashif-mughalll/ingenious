import {useEffect} from 'react'
import './MyProjectsView.css'
import { connect } from 'react-redux';
import { GetMyProjects } from '../../../Redux/PostedProjects/PostedProjectsAction';
import PostCard from '../../../Components/PostCard/PostCard';

var MyProjectsView = ({myProjects, GetMyProjects})=> {
    useEffect(() => {
        GetMyProjects();        
    }, [])

    return (
        <div className='my-project-view-container'>
            <h1 className='my-project-view-heading'>My Projects</h1>
            {myProjects.map( project => <PostCard key={project.id} project={project} editable={true} />)}
        </div>
    )
}

const mapState = (state) => {
    return {
        myProjects : state.PostedProjects
    }
}

const actions = {
    GetMyProjects,
}

export default connect(mapState,actions)(MyProjectsView)
