import React from 'react'

class Add  {

    constructor() {
        super()

        this.state = {
            productName: "",
            price: 1

        }
    }



    render() {

        return (

            <div className="d-flex flex-column align-items-center">

                <div className="mb-3" style={{ width: '95%' }}>
                    <div>
                        <input type="text" placeholder="Item" class="form-control" onChange={this.UpdateProductName}></input> row
                        <button className="btn btn-primary me-md-2" type="submit" onClick>Add</button>
                    </div>
                    <span>1 €</span>
                </div>

                <input style={{ width: '100%' }} type="range" min={1} max={10} onChaange={this.updatePrice}></input>
            </div>
        )
    }

}


export default Add;