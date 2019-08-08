import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

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
                            123456,
                            346743,
                            385746,
                            184736,
                            183958
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
        legendPosition: 'top'
    }
    render() {
        return(
            <div className = "chart">
            <Pie
                data={this.state.chartData}
                options={{
                    title:{
                        display: this.props.displayTitle,
                        text: 'Categories',
                        fontSize: 25
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