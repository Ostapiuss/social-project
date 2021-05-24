import React from 'react';
import { Link } from 'react-router-dom';

export function NavigationPanel() {
  return (
    <section className="nav__bar">
      <h3 className="nav__header">
        Navigation
      </h3>
      <ul className="nav__navigation navigation">
        <li className="navigation__item">
          <Link
            to="/dashboard"
            className="navigation__link"
          >
            Dashboard
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="emails"
            className="navigation__link"
          >
            Emails
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/calendar"
            className="navigation__link"
          >
            Calendar
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/pages"
            className="navigation__link"
          >
            Pages
          </Link>
        </li>
      </ul>
    </section>
  );
}