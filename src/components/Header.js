import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'; // Importer le fichier de styles

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Articles4U</Link>
          </li>
          <li className="nav-item">
            <Link to="/CreateArticle" className="nav-link">Add Article</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;