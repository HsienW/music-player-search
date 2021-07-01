import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const SearchDetail = () => {
    return <h2>Search Detail</h2>;
};

export const SearchRootDom = (props) => {
    const { routerBase } = props;

    return (
        <div>
            <h2>Search root dom is working!</h2>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/portal'}>Go to Portal</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path={`${routerBase}/detail`}>
                            <SearchDetail />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

