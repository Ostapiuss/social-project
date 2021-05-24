import React from 'react';
import { Link } from 'react-router-dom';

export function Featured() {
  return (
    <section className="nav__bar">
      <h3 className="nav__header">
        Featured
      </h3>
      <ul className="header__navigation navigation">
        <li className="navigation__item">
          <Link
            to="/charts"
            className="navigation__link"
          >
            Charts
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/articals"
            className="navigation__link"
          >
            Articals
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/users"
            className="navigation__link"
          >
            Users
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/favorites"
            className="navigation__link"
          >
            Favorites
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/speed"
            className="navigation__link"
          >
            Speed
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/settings"
            className="navigation__link"
          >
            Settings
          </Link>
        </li>
      </ul>
    </section>
  );
}