import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import InputContainer from './InputContainer';
import Loading from './Loading';
import { actions, handleData } from '../../actions'

export default function AddAndList() {
    const fetched = useSelector(state => state.fetched),
          fetching = useSelector(state => state.fetching),
          err = useSelector(state => state.err),
          list = useSelector(state => state.list),
          editable = useSelector(state => state.editable);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleData.getTasksList());
        editable && dispatch(actions.disableEdit());
    }, [])

    if (fetched && !fetching && list && !err) {
        document.title = 'Tasks list || ToDo List';
        return (
            <React.Fragment>
                <InputContainer />
                <List 
                    list={list} 
                    />
            </React.Fragment>
        );
    } else if (fetched && !fetching && !list && err) {
        document.title = 'Tasks list | Error | ToDo List';
        return (
            <React.Fragment>
                <main className="container bg-light flex-fill">
                    <p>{err}</p>
                </main>
            </React.Fragment>
        )
    } else {
        document.title = 'Tasks list | Loading | ToDo List';
        return (
            <Loading />
        )
    }
}