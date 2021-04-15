import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from "./component/Add"
import List from "./component/List"
import Pay from "./component/Pay"
import Button from "./component/Button"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'add',
      items: []
    };


    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteFunc = this.deleteFunc.bind(this);
  }


  selectAdd() {
    this.setState({ activeTab: 'add' });
  }

  selectList() {
    this.setState({ activeTab: 'list' });
  }

  selectPay() {
    this.setState({ activeTab: 'pay' });
  }

  addItem(theName, thePrice) {
    const newItem = {
      name: theName,
      price: thePrice
    };
    const updateItems = this.state.items;

    updateItems.push(newItem);

    this.setState({ items: updateItems });
    this.selectList()
  }

  deleteFunc() {
    const arrayItems = this.state.items;

    arrayItems.pop()

    this.setState({ items: arrayItems });
  }



  render() {
    return (

      <div className="container-fluid">
        <div className="row">

          <Add />
          <List />
          <Pay />
          <Button />

        </div>
        <h1 className="h1" style={{textAlign: 'center'}}>Bakery</h1>
        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</button>
        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activeTab} onClick={this.selectList} >List</button>
        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activeTab} onClick={this.selectPay} >Pay</button>
      </div>


    );
  }
}

export default App



