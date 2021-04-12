import React from 'react'


class Counter extends React.Component {

    render() {
        return (
            <div>

                <h2>{this.props.count}</h2>
                <button className="btn redBg" onClick={this.props.removeFunction}>-</button>
                <button className="btn greenBg" onClick={this.props.addFunction}>+</button>

            </div>
        )
    }
}

export default Counter