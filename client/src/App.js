import React, {Component} from 'react';
import Navbar from './components/Nav/Navbar';
import Chart from './components/Chart/Chart';
import Logs from './components/Logs/Logs'
import AddBalance from './components/MoneyButton/AddBalance';
import SubtractBalance from './components/MoneyButton/SubtractBalance';
import ShowBalance from './components/ShowBalance/ShowBalance';
import Categories from './components/Categories/Categories';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className = "chart-container" style ={{position: 'relative' , height: '0vh' , width: '50vw' , left: '240px' ,  top: '20px' }}>
                  <Chart />
                  <Logs />
                  <AddBalance />
                  <SubtractBalance />
                  <ShowBalance />
                  <Categories />
                </div>

            </React.Fragment>
        );
    }
}


export default App;
