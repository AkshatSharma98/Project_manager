import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Button color="primary">
        <Link to="/signin">Sign In</Link>
      </Button>
      <Button color="primary">
        <Link to="/signup">Sign Up</Link>
      </Button>
    </React.Fragment>
  );
};

export default SignedOutLinks;
