import React,{useEffect} from 'react'
import './MyProjectsView.css'
import { connect } from 'react-redux';
import { GetMyProjects } from '../../../Redux/PostedProjects/PostedProjectsAction';

var MyProjectsView = ({myProjects,GetMyProjects})=> {
    useEffect(() => {
        GetMyProjects();        
    }, [])

    console.log(myProjects)

    return (
        <div>
            
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
