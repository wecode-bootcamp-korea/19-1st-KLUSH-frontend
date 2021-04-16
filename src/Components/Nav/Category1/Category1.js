import React, { Component } from 'react';

import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import '../Category1/Category1.scss';

class Category1 extends Component {
  render() {
    return (
      <div className="category">
        <div className="categoryContainer">
          <ul>
            <li>베스트</li>
            <li>주간 베스트</li>
            <li>별 다섯개 후기</li>
            <li>온라인 전용</li>
            <li>국내 제조</li>
            <li>네이키드</li>
            <li>홈 스파</li>
          </ul>
          <ul>
            <li>솝</li>
            <li>샤워젤&젤리</li>
            <li>보디 컨디셔너</li>
            <li>샤워 밤</li>
            <li>샤워 오일</li>
            <li>스크럽&버터</li>
            <li>펀</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Category1;
