import React from 'react';
import ReactDOM from 'react-dom';
import {singleAppGlobalState} from 'music-player-common';
import {globalActiveListener} from 'music-player-common';
import {globalActiveMediator} from 'music-player-common';
import {observer, observerKey} from 'music-player-common';
import {SearchRootDom} from './root/root';
import './public-path';

function renderSearchRoot(props) {
    const {container, routerBase, setGlobalState, getGlobalState, onStateChange, observer, observerKey} = props;
    ReactDOM.render(
        <SearchRootDom
            routerBase={routerBase}
            setGlobalState={setGlobalState}
            getGlobalState={getGlobalState}
            onStateChange={onStateChange}
            observer={observer}
            observerKey={observerKey}
        />, container ? container.querySelector('#search-root') : document.querySelector('#search-root')
    );
}

function renderSingleSearchRoot(props) {
    import ('music-player-common/src/containers/auth/auth');
    import ('music-player-common/src/containers/loading-spin/loading-spin');
    import ('music-player-common/src/containers/side-bar/side-bar');
    import ('music-player-common/src/containers/header-bar/header-bar');
    import ('music-player-common/src/containers/player-bar/player-bar');
    import ('./root/root.scss');

    const {container, routerBase, setGlobalState, getGlobalState, onStateChange, observer, observerKey} = props;

    ReactDOM.render(
        <>
            <auth-container/>
            <loading-spin-container/>
            <div className="main-layout">
                <div className="side-layout">
                    <side-bar-container/>
                </div>
                <div className="header-layout">
                    <header-bar-container/>
                </div>
                <div className="content-layout">
                    <SearchRootDom
                        routerBase={routerBase}
                        setGlobalState={setGlobalState}
                        getGlobalState={getGlobalState}
                        onStateChange={onStateChange}
                        observer={observer}
                        observerKey={observerKey}
                    />
                </div>
                <div className="footer-layout">
                    <player-bar-container/>
                </div>
            </div>
        </>,
        container ? container.querySelector('#search-root') : document.querySelector('#search-root')
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    console.log('search ??????????????????');

    const routerBase = '/search';
    const authRedirectURL = `${routerBase}/genre`;
    const {getGlobalState, setGlobalState} = singleAppGlobalState;
    const props = {routerBase, getGlobalState, setGlobalState, observer, observerKey};

    sessionStorage.setItem('auth-redirect-url', JSON.stringify(authRedirectURL));
    singleAppGlobalState.setGlobalState('init', 'search ??????????????????');
    globalActiveListener.initAllAction();
    globalActiveMediator.callAction('initGlobalMediatorSubscribe');

    renderSingleSearchRoot(props);
}

/**
 * bootstrap ????????? init ????????? call ??????, ??????????????????????????? call mount hook
 * ???????????? bootstrap hook ?????????????????? global ????????? init, ??????????????? unmount ???????????? catch
 */
export async function bootstrap() {
    console.log('react app bootstrap is work');
}

/**
 * ?????????????????????????????? call mount, ?????? render ??????????????? call
 */
export async function mount(props) {
    renderSearchRoot(props);
}

/**
 * ???????????? or ???????????????????????? call unmount, ???????????????????????????????????? instance
 */
export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('search-root'));
}
