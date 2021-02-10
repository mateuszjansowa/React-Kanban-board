import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import '../styles/form.scss';

const Form = props => {
    const { submit, clearTasks } = props;

    const init = {
        taskName: '',
        taskAuthor: '',
        taskDescription: '',
        taskDate: '',
        taskTime: '',
    };

    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value };
    };

    const [state, dispatch] = useReducer(reducer, init);

    const { taskName, taskAuthor, taskDescription, taskDate, taskTime } = state;

    return (
        <form onSubmit={e => submit(e, state)} className="form">
            <label className="form__label">
                Zadanie
                <input
                    type="text"
                    name="taskName"
                    className="form__input"
                    value={taskName}
                    onChange={e => dispatch(e.target)}
                />
            </label>

            <label className="form__label">
                Przydzielony
                <input
                    type="text"
                    name="taskAuthor"
                    className="form__input"
                    value={taskAuthor}
                    onChange={e => dispatch(e.target)}
                />
            </label>

            <label className="form__label">
                Opis
                <textarea
                    rows="4"
                    cols="40"
                    name="taskDescription"
                    className="form__input"
                    value={taskDescription}
                    onChange={e => dispatch(e.target)}
                />
            </label>

            <label className="form__label">
                Termin
                <input
                    type="date"
                    name="taskDate"
                    className="form__input"
                    value={taskDate}
                    onChange={e => dispatch(e.target)}
                />
                <input
                    type="time"
                    name="taskTime"
                    className="form__input"
                    value={taskTime}
                    onChange={e => dispatch(e.target)}
                />
            </label>

            <div className="form__button-container">
                <button type="submit" className="form__button">
                    Wyślij zadanie!
                </button>

                <button type="button" className="form__button form__button--remove" onClick={clearTasks}>
                    Wyczyść zadania
                </button>
            </div>
        </form>
    );
};

export default Form;

Form.propTypes = {
    submit: PropTypes.func,
    clearTasks: PropTypes.func,
};

Form.defaultProps = {
    submit: () => {
        throw new Error('No submit provided');
    },
    clearTasks: () => {
        return 'clear';
    },
};
