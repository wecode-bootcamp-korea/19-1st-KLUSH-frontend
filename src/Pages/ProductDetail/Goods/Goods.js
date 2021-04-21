import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PRDDETAIL_API } from '../../../config';
import './Goods.scss';

class Goods extends Component {
  constructor() {
    super();
    this.state = {
      product_quantity: 1,
    };
  }

  inputValue = e => {
    const { value } = e.target;
    this.setState({
      product_quantity: value,
    });
  };

  addValue = () => {
    const { product_quantity } = this.state;
    if (product_quantity > 19) {
      return;
    }
    this.setState({
      product_quantity: product_quantity + 1,
    });
  };

  minusValue = () => {
    const { product_quantity } = this.state;
    if (product_quantity < 2) {
      return;
    }
    this.setState({
      product_quantity: product_quantity - 1,
    });
  };

  render() {
    const { productData } = this.props;
    const { product_quantity } = this.state;
    console.log(productData);
    return (
      productData.length !== 0 && (
        <section className="Goods">
          <div>
            <div className="mainImage">
              <img
                src={productData.product_thumbnail_image}
                alt="제품 상단 이미지"
              />
            </div>
            <div className="imgSlide">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="infoWrap">
            <div className="goodsTitle">
              <div className="title">
                <span>{productData.product_name}</span>
                <button>
                  <i class="far fa-heart" />
                </button>
              </div>
              <p>{productData.product_hashtag}</p>
            </div>
            <span>Good to Know </span>
            <button className="goodKnow">?</button>
            <ul className="pwBox">
              <li>
                <strong>판매가</strong>
                <span className="price">
                  &#8361;{Number(productData.product_price).toLocaleString()}
                </span>
              </li>
              <li>
                <strong>상품무게</strong>
                <span>{productData.product_options[0].weight}</span>
              </li>
              <li>
                <strong>구매수량</strong>
                <span className="count">
                  <button className="minus" onClick={this.minusValue}>
                    -
                  </button>
                  <input
                    className="inputCount"
                    onChange={this.inputValue}
                    value={product_quantity}
                  ></input>
                  <button className="plus" onClick={this.addValue}>
                    +
                  </button>
                </span>
              </li>
            </ul>
            <div className="endPrice">
              <span className="totalTxt">총 합계 금액</span>
              <span className="totalPrice">
                &#8361;
                {`${Number(
                  productData.product_price * product_quantity
                ).toLocaleString()}`}
              </span>
            </div>
            <div className="buyBtn">
              <Link to="/cart">장바구니</Link>
              <Link to="/cart">주문하기</Link>
            </div>
          </div>
        </section>
      )
    );
  }
}
export default Goods;
