import React from 'react'

class Card extends React.Component {

    render() {
        return (
            <div class="fw-bold" style={{ textAlign: 'center' }}>
                <img src={this.props.flag}
                    alt="countries flag"
                    style={{ width: "150px" }} />
                <br></br>
                <p>Country: <br /> {this.props.name}</p>
                <p>Capital: {this.props.capital}</p>
                <p>Region: <br /> {this.props.region}</p>
                <p>Population: <br /> {this.props.population}</p>
                <div class="border mx-2 px-6" >
                    <div style={{ textAlign: 'center' }}>
                        <img style={{
                            width: 180,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4
                        }}
                            src={this.props.flag}
                            alt="countries flag" />
                       
                        <br />
                        <br />
                        <p style={{ fontWeight: 600, fontSize: 19 }}>Country: <br /> {this.props.name}</p>
                        <p style={{ fontWeight: 500, fontSize: 17 }}>Capital: {this.props.capital}</p>
                        <p style={{ fontWeight: 450, fontSize: 17 }}>Region: <br /> {this.props.region}</p>
                        <p class="bi bi-people-fill" style={{ fontWeight: 450, fontSize: 17 }}>Population: <br /> {this.props.population}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;


