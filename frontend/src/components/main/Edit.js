import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowInfo from './ShowInfo';
import EditTask from './EditTask';
import Loading from './Loading';
import { handleData } from '../../actions'

export default function Edit() {
    const editable = useSelector(state => state.editable),
          task = useSelector(state => state.task),
          fetched = useSelector(state => state.fetched),
          fetching = useSelector(state => state.fetching),
          err = useSelector(state => state.err);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleData.getTask(window.location.pathname.split('/')[window.location.pathname.split('/').length-1]));
    }, [])

    if (fetched && !fetching && !err && task && Object.prototype.toString.call(task) === '[object Object]') {
        document.title = `Edit task | ${task.text} | ToDo List`;
        return (
            editable ? 
                <EditTask 
                    task={task}
                    fetched={fetched}
                    fetching={fetching}
                    editable={editable}
                />
            : 
                <ShowInfo 
                    task={task}
                    editable={editable}
                />
        )
    } else if (fetched && !fetching && err && !task) {
        document.title = 'Edit task | Error | ToDo List';
        return (
            <React.Fragment>
                <main className="container bg-light flex-fill">
                    <p>{err}</p>
                </main>
            </React.Fragment>
        )
    } else if (fetched && !fetching && !err && Object.prototype.toString.call(task) === '[object String]') {
        document.title = 'Edit task | Task not found | ToDo List';
        return (
            <React.Fragment>
                <main className="container bg-light flex-fill">
                    <p>{task}</p>
                </main>
            </React.Fragment>
        )
    } else {
        document.title = 'Edit task | Loading | ToDo List';
        return (
            <Loading />
        )
    }
}