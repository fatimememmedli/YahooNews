import React from "react";
import "./../../../assets/style/Home.scss";
import type { RootState } from "./../../../redux/store/store";

import Card from "../../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { obj } from "../../../redux/slices/newsSlice";
function Home() {
  const news: obj[] = useSelector((state: RootState) => state.news.news);
  console.log(news);
  return (
    <div id="home">
      <div className="container">
        <div className="head">
          <p>Stories for you</p>
        </div>
        {news &&
          news.map((elem: obj) => {
            return (
              <div key={elem.id}>
                <Card elem={elem} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
