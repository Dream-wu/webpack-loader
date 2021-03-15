import tpl from './info.tpl';

const app = document.querySelector('#app');

app.innerHTML = tpl({
    name: 'wumj',
    age: 34,
    career: 'web 开发',
    hobby: '吃饭'
});
console.log(124);