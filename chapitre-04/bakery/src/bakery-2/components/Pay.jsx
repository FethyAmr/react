class Pay extends React.Component {


clear() {
    this.setState({
        basket: [],

        total: 0,
        totalTVA: 0,
        totalEcoTax: 0,

        handleSelect(name, price) {

            const newBasket = this.state.basket
            let newAdd = {
                name: name,
                price: price,
                count: 1
            }

            let newTotal = this.state.total + parseInt(price);
            let newTotalEcoTax = this.state.totalEcoTax + 0.3;

            const testBasket = newBasket.filter(elem => elem.name === newAdd.name)

            if (testBasket.length === 0) {

                newBasket.push(newAdd);

                this.setState({
                    basket: newBasket,
                    total: newTotal,
                    totalEcoTax: newTotalEcoTax,
                    totalTVA: newTotal * 0.20,
                    totalTTC: newTotal * 1.20
                })
            } else {

                newBasket.forEach(elem => {
                    if (elem.name === newAdd.name) {
                        elem.count++
                    }
                });

                this.setState({
                    basket: newBasket,
                    total: newTotal,
                    totalEcoTax: newTotalEcoTax,
                    totalTVA: newTotal * 0.20,
                    totalTTC: newTotal * 1.20
                })
            }
        }

    render() {

            if (this.props.items.length === 0) {
                return (
                    <div className="mt-2">
                        <span className="h1" style={{ fontSize: 30 }}>No items are available</span>
                    </div>
                )
            } else if (this.state.total === 0 && this.props.items.length > 0) {
                return (
                    <div>
                        <p className="h3 mt-3 payTitle">Pay</p>

                        {this.state.basket.map(elem => {
                            return <p className="listBasket">{elem.name} x {elem.count}</p>
                        })}
                        <div className="allTotal">
                            <span>SubTotal: {this.state.total.toFixed(2)} €</span>
                            <span>VAT: {this.state.totalTVA.toFixed(2)} €</span>
                }))}
                </div>