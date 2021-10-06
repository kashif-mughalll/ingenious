import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";
import { LogOut } from "../../Redux/Auth/authActions";
import { CallUser } from "../../Redux/IncomingCall/IncomingCallActions";



// onClick={()=> CallUser({
//   initiator: true,
//   caller: {
//     id: "w2ydAVYwXefQ68LXlugmDPy4S4I3",
//     name: "kashif mughal",
//     picture:
//       "https://firebasestorage.googleapis.com/v0/b/ingenious-ecd53.appspot.com/o/images%2Fef2989e3-1587-4302-b9ef-bef8bfe98764.JPG?alt=media&token=fdb3363e-7d91-411a-8853-c21d2fff7816",
//   },
//   to: "0NYFblgI7UTtD95CEOaBku2YjUi2",
// })}


var LogOutButton = ({ picture, LogOut, CallUser }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex-around">
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="flex">
          <div className="nav-pic-cont">
            <img
              className="navbar-picture"
              src={
                picture
                  ? picture
                  : "https://static.vecteezy.com/system/resources/previews/002/534/006/non_2x/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
              }
              alt=""
            />
          </div>
          <i className="fas fa-caret-down caret-style"></i>
        </div>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            LogOut();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

const actions = {
  LogOut,
};

export default connect(null, actions)(LogOutButton);
