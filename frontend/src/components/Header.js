import React from 'react';
import { Link } from 'react-router-dom';
import parseUrl from '../utils/parseUrl';

export default class Header extends React.Component {
    render() {
        let url = parseUrl();
        return (
            <React.Fragment>
                <header className="navbar navbar-expand-sm bg-dark navbar-light justify-content-center">
                    <nav className="navbar-nav">
                        <li className={url === "/about" ? "nav-item active" : "nav-item"}>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className={url === "/tasks" ? "nav-item active" : "nav-item"}>
                            <Link to="/tasks" className="nav-link">
                                Tasks list
                            </Link>
                        </li>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}