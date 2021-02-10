import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MoveContext } from '../context';

import '../styles/task.scss';

const Task = props => {
    const { item } = props;
    const { id, idColumn, taskName, taskAuthor, taskDescription, taskDate, taskTime } = item;

    const moveTask = useContext(MoveContext);

    return (
        <div className="task">
            <p className="task__description">{taskDescription}</p>
            <p className="task__author">{taskAuthor}</p>
            <div className="task__summary">
                <div className="task__controls">
                    <button type="button" className="task__button" onClick={e => moveTask(e, id, idColumn)}>
                        <i className="fas fa-backward task__icon" id="backward" />
                    </button>
                    <button type="button" className="task__button" onClick={e => moveTask(e, id, idColumn)}>
                        <i className="fas fa-forward task__icon" id="forward" />
                    </button>
                    <p className="task__title">{taskName}</p>
                </div>
                <div className="task__details">
                    <p className="task__date">
                        {taskTime}
                        {taskTime && taskDate ? ', ' : null} {taskDate}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Task;

Task.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    item: PropTypes.object.isRequired,
    id: PropTypes.number,
    idColumn: PropTypes.number,
    taskName: PropTypes.string,
    taskAuthor: PropTypes.string,
    taskDescription: PropTypes.string,
    taskDate: PropTypes.string,
    taskTime: PropTypes.string,
};

Task.defaultProps = {
    id: 0,
    idColumn: 1,
    taskName: 'Name',
    taskAuthor: 'Author',
    taskDescription: 'No description provided',
    taskDate: 'No date',
    taskTime: 'No time',
};
