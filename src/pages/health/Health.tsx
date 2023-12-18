import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { obj } from "./../../redux/slices/newsSlice";
import type { RootState } from "./../../redux/store/store";
import Card from "../../components/Card";

function Health() {
  const news: obj[] = useSelector((state: RootState) => state.news.news);

  return (
    <div>
      <div id="home">
        <div className="container">
          <div className="head">
            <p>Stories for you</p>
          </div>
          {news &&
            news.map((elem: obj) => {
              if (elem.category === "Health") {
                return (
                  <div key={elem.id}>
                    <Card elem={elem} />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default Health;
