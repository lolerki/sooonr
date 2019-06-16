import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Modal, Button } from 'react-materialize';


const trigger = <Button>Open Modal</Button>;

export default class Home extends React.Component{

    constructor (props){
        super(props)
        this.increment = this.increment.bind(this)
        this.state= {
            counter: 0
        }
    }
    render(){
        return <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <p>Yo Joël !!</p><br/>
                        Compteur : {this.state.counter}<br/>
                        {this.state.counter > 10 && <div>Vous avez depassé 10</div>}
                        <button onClick={this.increment}>Incrément</button>

                        <Modal header="Modal Header" trigger={trigger}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Modal>

                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
    }

    increment (){
        this.setState({counter: this.state.counter + 1})
    }
}
