import React, { Component } from 'react';

import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

import { CART_API } from '../../config';

import '../Cart/Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCarts: [],
      checkBox: true,
    };
  }

  inputValue = event => {
    const { value } = event.target;
    this.setState({
      product_quantity: value,
    });
  };

  addValue = event => {
    const { shoppingCarts } = this.state;
    const { id } = event.target;
    let newCart = [...shoppingCarts];

    if (newCart[id].quantity > 19) {
      return;
    } else {
      newCart[id].quantity += 1;
    }

    this.setState({
      shoppingCarts: newCart,
    });
  };

  minusValue = event => {
    const { shoppingCarts } = this.state;
    const { id } = event.target;
    let newCart = [...shoppingCarts];

    if (newCart[id].quantity < 2) {
      return;
    } else {
      newCart[id].quantity -= 1;
    }

    this.setState({
      shoppingCarts: newCart,
    });
  };

  allCheckBox = () => {
    const { shoppingCarts, checkBox } = this.state;
    const newCart = shoppingCarts.map(item => {
      return { ...item, isChecked: true ? true : false };
    });
    this.setState({
      shoppingCart: newCart,
      checkBox: !checkBox,
    });
  };

  componentDidMount() {
    fetch(`${CART_API}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          shoppingCarts: data.results,
        });
      });
  }

  render() {
    const { shoppingCarts } = this.state;
    const total = shoppingCarts
      ?.map(el => Number(el.product_price) * Number(el.quantity))
      .reduce((acc, crr) => {
        return Number(acc) + Number(crr);
      }, 0);
    return (
      <div className="Cart">
        <Nav />
        <main>
          <div className="shoppingCart korean">
            <h1>SHOPPING CART</h1>
            <ul className="shoppingStep">
              <li>Cart</li>
              <li>&gt;</li>
              <li>Order</li>
              <li>&gt;</li>
              <li>Order confirmed</li>
            </ul>
          </div>
          <div className="PriceProduct">
            <h2>??????</h2>
            <table>
              <thead className="thread">
                <tr>
                  <th>
                    <input id="allCheck" type="checkbox" />
                  </th>
                  <th>?????? ??????</th>
                  <th>??????</th>
                  <th>??????</th>
                  <th>????????????</th>
                  <th>????????????</th>
                  <th>?????????</th>
                </tr>
              </thead>
              <tbody>
                {shoppingCarts.length !== 0 && (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td rowSpan={shoppingCarts.length + 1}>&#8361; 2,500</td>
                  </tr>
                )}
                {shoppingCarts.length !== 0 &&
                  shoppingCarts.map((cart, index) => {
                    return (
                      <tr>
                        <td>
                          <input type="checkbox" id={index} />
                        </td>
                        <td className="product">
                          <img src={cart.image} alt="" />
                          <div className="productInfo korean">
                            <h3>{cart.product_name}</h3>
                            <p>{cart.option} g</p>
                            <p>{cart.sub_category_name}</p>
                            <p>&#8361; {cart.product_price}</p>
                          </div>
                        </td>
                        <td className="quantity">
                          <li>
                            <span className="count">
                              <button
                                className="minus"
                                id={index}
                                onClick={this.minusValue}
                              >
                                -
                              </button>
                              <input
                                className="inputCount"
                                onChange={this.inputValue}
                                value={cart.quantity}
                              />
                              <button
                                className="plus"
                                id={index}
                                onClick={this.addValue}
                              >
                                +
                              </button>
                            </span>
                          </li>
                        </td>
                        <td>&#8361; {cart.product_price * cart.quantity}</td>
                        <td>-</td>
                        <td>&#8361; {cart.product_price * cart.quantity}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {shoppingCarts.length === 0 && (
              <div className="noProduct">
                ??????????????? ???????????? ????????? ????????????.
              </div>
            )}
            <div className="priceAll">
              <span>
                ??? {shoppingCarts.length} ?????? ?????? {total}??? + ????????? 2500 ??? =
                ??? ???????????? {total + 2500} ???
              </span>
            </div>
          </div>
          <button>?????? ??????</button>
          <div className="buttonContainer">
            <div className="shoppingContinue">?????? ????????????</div>
            <div className="order">????????????</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Cart;
