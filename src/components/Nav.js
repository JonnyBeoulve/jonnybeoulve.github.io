import React from 'react';
import Scroll from '../components/Scroll';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}>
              <li>
                <Scroll type="id" element="">
                  <a href="/">
                    Home
                  </a>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="about">
                  <a href="#about">
                    About
                  </a>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="skillset">
                  <a href="#skillset">
                    Skillset
                  </a>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="portfolio">
                  <a href="#portfolio">
                    Portfolio
                  </a>
                </Scroll>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
