import React from 'react';
import { Link } from 'react-router-dom';
import './FooterStyles.scss';

const Footer = () => (
    <ul className="footer__list">
        <Link to="/" className="footer__list__item footer__list__item--link">
            <li>Home</li>
        </Link>
        &middot;
        <a
            href="https://princekumar21.netlify.app"
            className="footer__list__item footer__list__item--link"
            target="_blank"
            rel="noopener noreferrer nofollow">
            <li>My Website</li>
        </a>
        &middot;
        <a
            href="https://www.twitter.com/prince-dsd"
            className="footer__list__item footer__list__item--link"
            target="_blank"
            rel="noopener noreferrer nofollow">
            <li>Twitter</li>
        </a>
        &middot;
        <a
            href="https://github.com/prince-dsd/git-graph"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="footer__list__item footer__list__item--link">
            <li>GitHub Repo</li>
        </a>
        &middot;
        <li className="footer__list__item footer__list__item--built-with">Built with</li>
        <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="footer__list__item footer__list__item--link footer__list__item--built-with footer__list__item--built-with">
            <li>React</li>
        </a>
        &middot;
        <a
            href="https://developer.github.com/v3/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="footer__list__item footer__list__item--link footer__list__item--built-with">
            <li>GitHub API</li>
        </a>
        &middot;
        <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="footer__list__item footer__list__item--link footer__list__item--built-with">
            <li>SCSS</li>
        </a>
        &middot;
        <a
            href="https://www.chartjs.org/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="footer__list__item footer__list__item--link footer__list__item--built-with">
            <li>Charts.js</li>
        </a>
    </ul>
);

export default Footer;
