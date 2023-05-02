import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="rota">
        <FaHome size={24} />
      </a>
      <a href="rota">
        <FaUserAlt size={24} />
      </a>
      <a href="rota">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
