import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { TaskContext } from '../context';

import Task from './Task';

import '../styles/column.scss';

const Column = props => {
    const { name, id, limit } = props;
    const tasks = useContext(TaskContext);

    const tasksReceived = tasks.filter(task => task.idColumn === id);

    const renderTasks = () => {
        return tasksReceived.map(task => {
            return <Task item={task} key={task.id} />;
        });
    };

    return (
        <div className="column">
            <div className="column__title">
                <p className="column__name">
                    {name}{' '}
                    {limit && limit !== Infinity ? <span className="column__limit-number">| {limit}</span> : null}
                </p>
            </div>

            <ul className="column__list">{renderTasks()}</ul>
        </div>
    );
};

export default Column;

Column.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    limit: PropTypes.number,
};

Column.defaultProps = {
    name: 'default',
    id: 0,
    limit: Infinity,
};
