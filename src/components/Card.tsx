import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./../assets/style/Card.scss";
import { useState } from "react";
import { obj } from "../redux/slices/newsSlice";
import { incLike } from "../redux/slices/newsSlice";
import { useDispatch } from "react-redux";

function Card({ elem }: obj) {
  // let element: obj = elem;
  const dispatch = useDispatch();

  let [likecount, setLikecount] = useState<number>(elem.like);
  return (
    <div className="card">
      <div className="image">
        <img src={elem.image} alt="" />
      </div>
      <div className="card-right">
        <div className="category-date">
          <p id="head">{elem.category}</p>
          <p id="date">
            {elem.date.getDate()}. {elem.date.getMonth()} .
            {elem.date.getFullYear()}
          </p>
        </div>
        <div className="news-head">{elem.newsHead}</div>
        <div className="news">{elem.news}</div>
        <div className="like-dislike-seen">
          <div className="seen">
            <FontAwesomeIcon icon={faEye} />
            <span>{elem.seen}</span>
          </div>
          <div className="like-dislike">
            <div className="like">
              <FontAwesomeIcon
                onClick={(e) => {
                  e.preventDefault();
                  likecount++;
                  dispatch(
                    incLike({
                      id: elem.id,
                      like: likecount,
                    })
                  );
                }}
                icon={faThumbsUp}
              />
              <span>{elem.like}</span>
            </div>
            <div className="dislike">
              <FontAwesomeIcon icon={faThumbsDown} />
              <span>{elem.dislike}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
