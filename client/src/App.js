<<<<<<< HEAD
import React, {Component} from 'react';
import Navbar from './components/Nav/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';
import Chart from './components/Chart/Chart';

class App extends Component {

    state = {
        sidebarOpen: false
    }

    sidebarButtonClickHandler = () => {
        this.setState((prevState) => {
            return {sidebarOpen: !prevState.sidebarOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({sidebarOpen: false})
    }

    render() {
        let backdrop;
        let sidebar

        if (this.state.sidebarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <React.Fragment>
                <div style = {{height: '100%'}}>
                    <Navbar sidebarButtonClickHandler={this.sidebarButtonClickHandler} />
                    <Sidebar show={this.state.sidebarOpen} />
                    {sidebar}
                    {backdrop}
                    <main style = {{marginTop: '64px'}}>
                    </main>
                </div>
                <div className = "chart-container" style ={{position: 'relative' , height: '0vh' , width: '60vw' , left: '300px' ,}}>
                    <Chart />
                </div>

            </React.Fragment>
        );
    }
}
=======
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

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
  );
}

>>>>>>> 53a7e2457053fe8d24911d1fb8f2b4d527ddeeea
export default App;
