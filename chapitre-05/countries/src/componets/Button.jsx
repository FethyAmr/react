import React from "react";
class Button extends React.Component {
    render() {
        const countryName = this.props.children
        return (
            <button type="button" class="btn btn-primary" onClick={() => this.props.onClick(countryName)}>{countryName}</button>
        )
    }
}
export default Button;