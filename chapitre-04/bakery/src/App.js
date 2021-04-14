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
      // activeTab: add,
      // items: []
    }
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
      </div>


    );
  }
}

export default App