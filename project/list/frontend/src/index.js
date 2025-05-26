const {createRoot} = require('react-dom/client');

const App = require('./app');

const root = createRoot(document.getElementById('render-list-app'));

root.render(<App/>);
