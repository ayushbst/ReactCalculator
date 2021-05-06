import React from 'react';
import ReactDOM from 'react-dom';

import CalcFace from './components/calcFace'

class App extends React.Component {
    render(){
        return(
            <>
                <CalcFace/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
