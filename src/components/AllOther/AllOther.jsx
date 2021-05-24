import React from 'react';
import { Link } from 'react-router-dom';

export function AllOther() {
  return (
    <section className="nav__bar">
      <h3 className="nav__header">
        All Other
      </h3>
      <ul className="header__navigation navigation">
        <li className="navigation__item">
          <Link
            to="/revenue"
            className="navigation__link"
          >
            Revenue
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/pictures"
            className="navigation__link"
          >
            Pictures
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/faqs"
            className="navigation__link"
          >
            FAQs
          </Link>
        </li>
      </ul>
    </section>
  );
}