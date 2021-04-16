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
    
   
  }


  selectAdd() {
    this.setState({ activeTab: 'Add' });
  }

  selectList() {
    this.setState({ activeTab: 'List' });
  }

  selectPay() {
    this.setState({ activeTab: 'Pay' });
  }

  




  render() {
    return (

      <div className="container-fluid">
        <div className="row">

          <Add />
          <List />
          <Pay />
         

        </div>
        <h1 className="h1" style={{textAlign: 'center'}}>Bakery</h1>
        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</button>
        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activeTab} onClick={this.selectList} >List</button>
        <button type="button" class="btn btn-outline-primary" isSelected={this.state.activeTab} onClick={this.selectPay} >Pay</button>
       
        <Button className="btn btn-outline-primary" isSelected={this.state.activeTab} onClick={this.selectAdd}></Button>

      </div>


    );
  }
}

export default App



