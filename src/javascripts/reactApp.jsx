import ReactDom from 'react-dom';
import * as React from 'react';
import Alert from './Alert.tsx';

const App = (props) => {
    return (
        <div>

        </div>
    );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
    ReactDom.render(<App/>, reactRoot);
} else {
    console.log('No root element found');
}
