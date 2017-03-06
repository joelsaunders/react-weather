import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {

    renderList() {
        return this.props.weather.map(({city, list}) => {
            const data = {
                temp: list.map((item) => {return item.main.temp}),
                pressure: list.map((item) => {return item.main.pressure}),
                humidity: list.map((item) => {return item.main.humidity}),
            }
            return (
                <tr key={city.id}>
                    <td><Map lat={city.coord.lat} lon={city.coord.lon} /></td>
                    <td><Chart data={data.temp} color="green" units="K" /></td>
                    <td><Chart data={data.pressure} color="purple" units="hPa" /></td>
                    <td><Chart data={data.humidity} color="orange" units="%" /></td>                    
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);