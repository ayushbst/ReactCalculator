import React from 'react'

let num1=0;
let num2=0;
let ans=0;
class Layout extends React.Component
{
    getSymbol(event)
    {

    }
    inputNumeral(event)
    {
        num1=event
        ans=num1
    }   
    
    sum(n1, n2)
    {
        return(n1+n2);
    }

    difference(n1, n2)
    {
        return(n1-n2);
    }

    multiply(n1, n2)
    {
        return (n1*n2);
    }

    divide(n1, n2)
    {
        return (n1/n2);
    }
    render() {
        return(
            <div>
                <div>{ans}</div>
                <div>
                    <button className="button" onClick = {(event) => this.inputNumeral(9)}>9</button>
                    <button className="button" onClick = {(event) => this.inputNumeral(8)}>8</button>
                    <button className="button" onClick = {(event) => this.inputNumeral(7)}>7</button>
                    <button className="button" onClick = {(event) => this.getSymbol('/')}>/</button>
                </div>

                <div>
                    <button className="button" onClick = {(event) => this.inputNumeral(6)}>6</button>
                    <button className="button" onClick = {(event) => this.inputNumeral(5)}>5</button>
                    <button className="button" onClick = {(event) => this.inputNumeral(4)}>4</button>
                    <button className="button" onClick = {(event) => this.getSymbol('*')}>*</button>
                </div>
            
                <div>
                    <button className="button" onClick = {(event) => this.inputNumeral(3)}>3</button>
                    <button className="button" onClick = {(event) => this.inputNumeral(2)}>2</button>
                    <button className="button" onClick = {(event) => this.inputNumeral(1)}>1</button>
                    <button className="button" onClick = {(event) => this.getSymbol('-')}>-</button>
                </div>

                <div>
                    <button className="button" onClick = {(event) => this.inputNumeral(event)}>0</button>
                    <button className="button">C</button>
                    <button className="button" onClick = {(event) => this.getSymbol('=')}>=</button>
                    <button className="button" onClick = {(event) => this.getSymbol('+')}>+</button>
                </div>

            </div>
        )
    }
}

export default Layout;