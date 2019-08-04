import React, {Component} from 'react';
import Navbar from './components/Nav/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';

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
            <div style = {{height: '100%'}}>
                <Navbar sidebarButtonClickHandler={this.sidebarButtonClickHandler} />
                <Sidebar show={this.state.sidebarOpen} />
                {sidebar}
                {backdrop}
                <main style = {{marginTop: '64px'}}>
                </main>
            </div>
        );
    }
}
export default App;
