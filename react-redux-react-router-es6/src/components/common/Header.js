import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header =() => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="badge">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="badge">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="badge">Courses</Link>
    </nav>
  );
};

export default Header;
