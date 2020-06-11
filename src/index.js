import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/layout'

import './style/styles.css'

const App = () => {
    return(
        <div>
            <Layout/>   
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))