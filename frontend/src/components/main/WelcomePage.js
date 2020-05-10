import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { actions, handleData } from '../../actions';

export default function WelcomePage() {
    const fetched = useSelector(state => state.fetched),
          fetching = useSelector(state => state.fetching),
          err = useSelector(state => state.err),
          editable = useSelector(state => state.editable);
          
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleData.getServerState());
        editable && dispatch(actions.disableEdit());
    }, [])

    if (fetched && !fetching && !err) {
        document.title = 'Welcome || ToDo List';
        return (
            <React.Fragment>
                <h1 className="text-center">Welcome to ToDo List Application!</h1>
                <h2 className="text-center">Make your own tasks, edit them if needed, complete them all or just remove them. Have fun.</h2>
                <Link to="/tasks" className="d-flex justify-content-center">
                    <button className="btn btn-dark pl-4 pr-4 pt-2 pb-2" type="button">Start</button>
                </Link>
            </React.Fragment>
        );
    } else if (fetched && !fetching && err) {
        document.title = 'Welcome | Error | ToDo List';
        return (
            <React.Fragment>
                <main className="container bg-light flex-fill">
                    <p>{err}</p>
                </main>
            </React.Fragment>
        )
    } else {
        document.title = 'Welcome | Loading | ToDo List';
        return (
            <Loading />
        )
    }
}