import React, { Component } from 'react';
import './Refund.scss';

class Refund extends Component {
  render() {
    return (
      <div className="Refund">
        <p>배송/교환 및 반품 안내</p>
        <p>
          ■ 배송비 : 기본배송료는 2,500원 입니다. (도서,산간,오지 일부지역은
          배송비가 추가될 수 있습니다)
        </p>
        <p>■ 택배사 : 우체국 택배를 이용합니다.</p>
        <p>■ 배송가능지역 : 국내 배송 / 해외 배송은 불가 합니다. </p>
        <p>
          ■ 홈페이지에서 구매한 경우 홈페이지에서 구매한 제품은 홈페이지를
          통해서만 교환이 가능합니다. 고객님의 변심에 의한 반품인 경우 상품 및
          서비스를 공급 받은 날로부터 7일 이내 가능하며, 미 개봉 제품만
          가능합니다.
        </p>
        <p>
          고객센터로 반품 접수를 받고 있으며, 지정 택배사를 이용하여 상품 회수
          후 교환/반품 여부에 관한 안내가 이루어집니다.
        </p>
        <p>
          *고객변심으로 인한 교환시 초도 택배 비용을 포함한 반품 택배 비용이
          부과됩니다.
        </p>
        <p>*상품결함으로 인한 교환의 경우 택배비용을 부담합니다.</p>
        <p>*택배 비용은 무통장 입금을 통해서만 결제 가능합니다.</p>
        <p>
          *교환상품에 스마트 샘플 또는 깜짝 선물이 있는 경우, 함께 반품하여야
          교환이 진행됩니다.
        </p>
      </div>
    );
  }
}

export default Refund;
