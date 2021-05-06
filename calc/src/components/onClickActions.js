import React from 'react';

class Action extends React.Component {
    state = {
        intValue : 0,
        operandValue : ''
    }
    onClick7 = () => {
        this.setState({
            intValue: 7
        })
    }

    onClick8 = () => {
        this.setState({
            intValue: 8
        })
    }

    onClick9 = () => {
        this.setState({
            intValue: 9
        })
    }

    onClick4 = () => {
        this.setState({
            intValue: 4
        })
    }

    onClick5 = () => {
        this.setState({
            intValue: 5
        })
    }

    onClick6 = () => {
        this.setState({
            intValue: 6
        })
    }

    onClick3 = () => {
        this.setState({
            intValue: 3
        })
    }

    onClick2 = () => {
        this.setState({
            intValue: 2
        })
    }

    onClick1 = () => {
        this.setState({
            intValue: 1
        })
    }

    onClick0 = () => {
        this.setState({
            intValue: 0
        })
    }
}

export default Action;