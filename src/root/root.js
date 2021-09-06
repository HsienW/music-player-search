import React, {useState} from 'react';
import {Genre} from '../containers/genre/genre';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './root.scss';

export const SearchRootDom = (props) => {
    const {routerBase, setGlobalState, getGlobalState, observer, observerKey} = props;
    // const defaultValue = getGlobalState('init');
    // const [testValue, changeValue] = useState(defaultValue);
    //
    // const click = (handler) => {
    //     const newValue = Math.floor(Math.random() * 5) + 1;
    //     changeValue(newValue);
    //     console.log(getGlobalState('init'));
    //     return handler({init: newValue});
    // };

    return (
        <BrowserRouter>
            <Switch>
                <Route path={`${routerBase}/genre`}>
                    <Genre
                        observer={observer}
                        observerKey={observerKey}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

