import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useStorage } from '../hook';

import Form from './Form';
import Board from './Board';
import Toolbar from './Toolbar';

import { TaskContext, MoveContext } from '../context';

import '../styles/global.scss';
import '../styles/app.scss';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const [saveStorage, getStorage] = useStorage();

    saveStorage(tasks);
    getStorage(setTasks);

    const columnSettings = [
        { name: 'Zadania', id: 1, limit: Infinity },
        { name: 'W trakcie', id: 2, limit: 2 },
        { name: 'Testowanie', id: 3, limit: 3 },
        { name: 'Zrobione', id: 4, limit: Infinity },
    ];

    const addID = task => {
        return {
            id: uuid(),
            idColumn: 1,
            ...task,
        };
    };

    const handleSubmit = (e, task) => {
        e.preventDefault();
        const preparedTask = addID(task);
        setTasks([...tasks, preparedTask]);
    };

    const findNextColumn = idColumn => {
        const nextColumnIndex = columnSettings.findIndex(column => column.id === idColumn) + 1;

        return nextColumnIndex < columnSettings.length ? columnSettings[nextColumnIndex] : null;
    };

    const findPrevColumn = idColumn => {
        const prevColumnIndex = columnSettings.findIndex(column => column.id === idColumn) - 1;

        return prevColumnIndex > -1 ? columnSettings[prevColumnIndex] : null;
    };

    const moveTask = (e, id, idColumn) => {
        const [targetedTask] = tasks.filter(task => task.id === id);
        const tasksCopy = [...tasks];

        const targetedColumn = (e.target.id === 'forward' ? findNextColumn : findPrevColumn)(idColumn);

        if (targetedColumn !== null) {
            const numberOfTasksInside = tasksCopy.filter(task => task.idColumn === targetedColumn.id).length;

            if (numberOfTasksInside < targetedColumn.limit) {
                const targetedTaskIndex = tasks.findIndex(task => task.id === id);
                tasksCopy.splice(targetedTaskIndex, 1);

                // eslint-disable-next-line no-unused-expressions
                e.target.id === 'forward' ? (targetedTask.idColumn += 1) : (targetedTask.idColumn -= 1);
                tasksCopy.push(targetedTask);
                return setTasks(tasksCopy);
            }
        }
        return null;
    };

    const clearTasks = () => {
        localStorage.clear();
        setTasks([]);
    };

    return (
        <div className="container">
            <Toolbar />
            <div className="app">
                <h1 className="app__title">Kanban board</h1>
                <Form submit={(e, state) => handleSubmit(e, state)} clearTasks={() => clearTasks()} />
                <TaskContext.Provider value={tasks}>
                    <MoveContext.Provider value={moveTask}>
                        <Board settings={columnSettings} />
                    </MoveContext.Provider>
                </TaskContext.Provider>
            </div>
        </div>
    );
};

export default App;
