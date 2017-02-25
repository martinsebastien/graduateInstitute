import React from 'react';
import { Link } from 'react-router';

import logo from './logo.png';

export default function Logo() {
  return (
    <Link to="/">
      <img height="137" width="306" src={logo} alt="" />
    </Link>
  );
}
