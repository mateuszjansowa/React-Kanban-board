import React from 'react';
import PropTypes from 'prop-types';

import Column from './Column';

import '../styles/board.scss';

const Board = props => {
    const { settings } = props;
    return (
        <div className="board">
            {settings.map(columnSetting => {
                return (
                    <Column
                        name={columnSetting.name}
                        id={columnSetting.id}
                        limit={columnSetting.limit}
                        key={columnSetting.id}
                    />
                );
            })}
        </div>
    );
};

export default Board;

Board.propTypes = {
    settings: PropTypes.arrayOf,
};

Board.defaultProps = {
    settings: [],
};
