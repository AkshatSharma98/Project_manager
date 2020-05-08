import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import Button from "@material-ui/core/Button";



const SignedInLinks = (props) => {
  return (
    <React.Fragment>
      <Button color="primary">
        <Link to="/create">New Project</Link>
      </Button>
      <Button color="primary">
        <a onClick={props.signOut}>Log out</a>
      </Button>
      <Button>
        <Link to="/" className="btn btn-floating pinklighten-1">
          {props.profile.initials}
        </Link>
      </Button>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
