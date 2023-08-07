import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className='nav'>
      <Link to="/">
        <div>Crypto Home</div>
      </Link>
      <Link to="/currencies">
        <div>Curriences</div>
      </Link>
      <Link to= "/price">
        <div>Crypto Price</div>
      </Link>
    </div>
  );
};

export default Nav;

// shortcut for function call () => {}
// function call os (){}