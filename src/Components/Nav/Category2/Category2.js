import React, { Component } from 'react';

import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import '../Category2/Category2.scss';

class Category2 extends Component {
  render() {
    return (
      <div className="introduce">
        <div className="introduceContainer">
          <ul>
            <li>러쉬 소개</li>
            <li>러쉬 역사</li>
            <li>이념과 가치</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Category2;
