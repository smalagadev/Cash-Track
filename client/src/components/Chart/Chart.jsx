import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import  demo from '../../demo';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: ['Food' , 'Entertainment' , 'Shopping' , 'Living' , 'Travel'],
                datasets: [
                    {
                        label: 'Example',
                        data:[
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 78, 0.6)',
                            'rgba(29, 59, 146, 0.6)'
                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
        fontSize: 25
    }
    render() {
        return(
            <div className = "chart">
            <Doughnut
                data={this.state.chartData}
                options={{
                    title:{
                        display: this.props.displayTitle,
                        text: 'Categories',
                        fontSize: 25,
                        fontColor: '#00ccff'
                    },
                    legend:{
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    },
                    responsive: true,
                }}
            />
            </div>
        )
    }
}

export default Chart