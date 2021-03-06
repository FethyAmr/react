import React from "react"
import Button from "./components/Button"
import Add from "./components/Add"
import List from "./components/List"
import Pay from "./components/Pay"
import "bootstrap/dist/css/bootstrap.min.css"


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "add",
            items: []
        }
    }
    selectAdd = (e) => {
        this.setState({ activeTab: "add" })

    }
    selectList = (e) => {
        this.setState({ activeTab: "list" })

    }
    selectPay = (e) => {
        this.setState({ activeTab: "pay" })

    }
    addItem = (name, price) => {
        let tab = [...this.state.items];
        tab.push({ name, price });
        this.setState({
            items: tab
        })
    }
    renderTab() {
        if (this.state.activeTab === "add") return <Add addItem={this.addItem}></Add>
        if (this.state.activeTab === "list") return <List items={this.state.items}></List>
        if (this.state.activeTab === "pay") return <Pay items={this.state.items} ></Pay>
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 align-self-start">
                        <Button type="button" isSelected={this.state.activeTab == "add" ? "form-control btn btn-primary" : form - control "btn btn-light"}
                 onClick={this.selectAdd}
                 ></Button>
                </div>
        
        );
    }
}


export default App;