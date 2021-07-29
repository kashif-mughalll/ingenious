import { connect } from 'react-redux';
import CollaborationCard from '../../../Components/CollaborationCard/CollaborationCard';
import './MyCollaborationView.css'

var MyCollaborationView = ({ requests })=> {
    return (
        <div className="my-collaboration-view-cont">
            <h1 className="my-collaboration-view-head">My Collaborations</h1>
            {requests.map( request => <CollaborationCard key={request.rid} {...request} />)}
        </div>
    )
}

const mapState = (state) => ({
    requests : state.Requests
});
  
export default connect(mapState)(MyCollaborationView)
