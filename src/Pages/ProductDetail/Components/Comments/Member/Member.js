import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Comment from '../Comment';
import { COMMENT_API, STAR_API } from '../../../../../config';
import './Member.scss';

class Member extends Component {
  state = {
    comment: '',
    commentList: [],
    dates: '',
    commentsList: [],
    star: '',
    starRate: '',
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({
      comment: value,
    });
  };

  handleStar = e => {
    const { value } = e.target;
    this.setState({
      starRate: value,
    });
  };

  onSubmitClick = e => {
    e.preventDefault();
    this.state.comment.length > 10
      ? this.handleAddComment()
      : alert(`최소 10자리 이상 작성해 주세요.`);
  };

  handleAddComment = () => {
    const { commentList, comment, starRate } = this.state;
    const date = [
      new Date().getFullYear(),
      new Date().getDay(),
      new Date().getDate(),
    ];
    this.setState(
      {
        commentList: [...commentList, { comment: comment }],
        comment: '',
        dates: date,
        starRate: starRate,
      },
      () => {
        alert('추가되었습니다.');
        fetch(`${COMMENT_API}`, {
          method: 'post',
          headers: {
            Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.k8V9fYZNF2rrxKOSuD6rGL2QgVd1XOW-HnQOPuHoyiQ`,
          },
          body: JSON.stringify({
            product_id: this.props.match.params.id,
            content: comment,
          }),
        }).then(res => res.json());

        fetch(`${STAR_API}`, {
          method: 'post',
          headers: {
            Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.1k9n4j4bUGXO3owMyxQsbk6ZeRopHo6npFNM8Z4JP2U`,
          },
          body: JSON.stringify({
            product_id: this.props.match.params.id,
            rate: starRate,
          }),
        }).then(res => res.json());
      }
    );
  };

  componentDidMount() {
    fetch(`${COMMENT_API}/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentsList: data.results,
        });
      });

    fetch(`${STAR_API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          star: data.result,
        });
      });
  }

  render() {
    const { commentList, dates, commentsList, star } = this.state;
    return (
      <section className="section">
        <div className="comment">
          <h1>product Reviews </h1>
          <p>나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
          <form>
            <div className="commentScore">
              <span>평가</span>
              <label>
                <input
                  onClick={this.handleStar}
                  value="5.00"
                  className="radioBox"
                  type="radio"
                  name="star"
                />
                ★★★★★
              </label>
              <label>
                <input
                  onClick={this.handleStar}
                  value="4.00"
                  type="radio"
                  name="star"
                />
                ★★★★☆
              </label>
              <label>
                <input
                  onClick={this.handleStar}
                  value="3.00"
                  type="radio"
                  name="star"
                />
                ★★★☆☆
              </label>
              <label>
                <input
                  onClick={this.handleStar}
                  value="2.00"
                  type="radio"
                  name="star"
                />
                ★★☆☆☆
              </label>
              <label>
                <input
                  onClick={this.handleStar}
                  value="1.00"
                  type="radio"
                  name="star"
                />
                ★☆☆☆☆
              </label>
            </div>
            <div className="commentInputBox">
              <textarea
                onChange={this.handleInput}
                className="commentInput"
                type="text"
                placeholder="텍스트를 입력해 주세요."
              />
            </div>
            <div className="commentPersonInfo">
              <div className="commentPersonInfoBox">
                <span>작성자 :</span>
                <input className="whiter" type="text" />
                <span>패스워드 :</span>
                <input className="whiterPw" type="password" />
              </div>
              <button className="commentBtn" onClick={this.onSubmitClick}>
                후기작성
              </button>
            </div>
          </form>
          {/* <Comment rate={commentsList} /> */}
          {/* 1. 별점 */}
          {/* {commentsList.map(comment => {
            return <Comment rate={comment} />;
          })} */}
          {commentsList.map(comment => {
            return <Comment commentList={comment} star={star} />;
          })}
          <div className="commentBoxes">
            {commentList.map(comment => {
              return (
                <>
                  <div className="commentBox">
                    <div className="summary">
                      <div className="star">★★★★★</div>
                      <div className="date">
                        <span>{`${dates[0]}-${dates[1]}-${dates[2]}`}</span>
                      </div>
                      <div className="buyer">
                        <span>네이버페이 구매자</span>
                      </div>
                    </div>
                    <div className="contentContainer">
                      <div className="goodsBlock"></div>
                      <div className="goodsInfoReview">
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <nav>
              <ul className="commentPage">
                <span className="commentFirstPage">1</span>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <span>3</span>
                </li>
                <li>
                  <span>4</span>
                </li>
                <li>
                  <span>5</span>
                </li>
                <li>
                  <span>6</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Member);
