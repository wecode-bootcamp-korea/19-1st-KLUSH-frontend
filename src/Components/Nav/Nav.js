import React, { Component } from 'react';

import Category1 from '../Nav/Category1/Category1';
import Category2 from '../Nav/Category2/Category2';

import '../../Styles/common.scss';
import '../../Styles/reset.scss';
import '../Nav/Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      currentId: -1,
      navList: [],
    };
  }

  navMouseOver = id => {
    this.setState({ currentId: id });
    console.log('over');
  };

  navMouseLeave = () => {
    this.setState({ currentId: -1 });
  };

  componentDidMount() {
    fetch('/data/navdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          navList: data.results,
        });
      });
  }

  render() {
    const { navList, currentId } = this.state;
    console.log(navList);
    return (
      <div onMouseLeave={this.navMouseLeave}>
        <nav>
          <h1>KLUSH</h1>
          <ul>
            {navList.map((content, idx) => {
              return (
                <li
                  key={content.id}
                  onMouseOver={() => this.navMouseOver(idx + 1)}
                >
                  {content.name}
                </li>
              );
            })}
          </ul>
        </nav>
        {MAPPING_CATEGORYS[currentId]}
      </div>
    );
  }
}

const MAPPING_CATEGORYS = {
  1: <Category1 />,
  2: <Category2 />,
};

export default Nav;
