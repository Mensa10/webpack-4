import React from 'react';
import { render } from 'react-dom';
import './styles/style.css';

const App = () => {
    return(
        <div>
            <span>Test</span>
        </div>
    )
}

export default App;

render(<App />, document.getElementById("app"))