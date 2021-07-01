import React from 'react';
import ReactDOM from 'react-dom';
import {SearchRootDom} from './root/root';
import '../public-path';

function renderSearchRoot(props) {
    const { container, routerBase } = props;
    ReactDOM.render(<SearchRootDom routerBase = {routerBase}/>, container ? container.querySelector('#search-root') : document.querySelector('#search-root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    renderSearchRoot();
}
/**
 * bootstrap 只會再 init 的時候 call 一次, 之後重新加載會直接 call mount hook
 * 通常這個 bootstrap hook 是用來做一些 global 變數的 init, 像是不會再 unmount 被清掉的 catch
 */
export async function bootstrap() {
    console.log('react app bootstrap is work');
}
/**
 * 每次加載進子專案都會 call mount, 一般 render 也會在這邊 call
 */
export async function mount(props) {
    renderSearchRoot(props);
}
/**
 * 每次切換 or 卸載進子專案都會 call unmount, 一般會在這裡銷毀子專案的 instance
 */
export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('react1-root'));
}
