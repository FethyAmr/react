import React from 'react'
class Card extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.flag} alt="countries flag" style={{width: "200px"}}/>
                <p>Name: {this.props.name}</p>
                <p>Capital: {this.props.capital}</p>
                <p>Region: {this.props.region}</p>
                <p>Population: {this.props.population}</p>
            </div>
        )
    }
}
export default Card;