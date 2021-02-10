/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../styles/toolbar.scss';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <ul className="toolbar__list">
                <li className="toolbar__item">
                    <a href="#">
                        <i className="fas fa-home toolbar__icon" />
                    </a>
                </li>
                <li className="toolbar__item">
                    <a href="#">
                        <i className="fas fa-project-diagram toolbar__icon" />
                    </a>
                </li>
                <li className="toolbar__item">
                    <a href="#">
                        <i className="fas fa-calendar-alt toolbar__icon" />
                    </a>
                </li>
                <li className="toolbar__item">
                    <a href="#">
                        <i className="fas fa-headset toolbar__icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Toolbar;
