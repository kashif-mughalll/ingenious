import { connect } from 'react-redux';
import CollaborationCard from '../../../Components/CollaborationCard/CollaborationCard';
import './MyCollaborationView.css'
import { GetMyCollaborations } from './../../../Redux/Collaborations/CollaborationsActions';
import {useEffect} from 'react'
import { v4 as Uuid } from 'uuid';

var MyCollaborationView = ({ Collaborations, GetMyCollaborations })=> {

    useEffect(async () => {        
        await GetMyCollaborations();
    }, [])
    console.log(Collaborations);
    return (
        <div className="my-collaboration-view-cont">
            <h1 className="my-collaboration-view-head">My Collaborations</h1>
            {Collaborations ? Collaborations.map( element => <CollaborationCard key={Uuid()} {...element} />) : null}
        </div>
    )
}

const mapState = (state) => ({
    Collaborations : state.Collaborations
});

const actions = {
    GetMyCollaborations
}
  
export default connect(mapState,actions)(MyCollaborationView)
