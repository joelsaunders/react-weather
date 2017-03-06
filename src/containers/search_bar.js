import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit= this.handleFormSubmit.bind(this);
    }

    render() {
        console.log(this.state.term)
        return (
            <form onSubmit={this.handleFormSubmit} className="input-group" >
                <input
                placeholder="Get The Weather Shitty Version"
                className="form-control"
                value={this.state.term}
                onChange={this.handleInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

    handleInputChange(event) {
        this.setState({term: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        // now need to fetch weather data
        this.props.fetchWeather(this.state.term);
        // clear input box
        this.setState({term: ''});
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);