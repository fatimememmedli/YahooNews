import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../assets/style/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { obj } from "./../redux/slices/newsSlice";
import type { RootState } from "./../redux/store/store";
import { search } from "./../redux/slices/newsSlice";
function Navbar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const news: obj[] = useSelector((state: RootState) => state.news.news);
  let array = news;

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-left">
            <Link
              style={{
                textDecoration: "none",
                color: "#5e00d1ff",
                fontFamily: "cursive",
                fontSize: "large",
                fontWeight: "bold",
              }}
              to="/home"
            >
              <div>
                Yahoo News
                {/* <img
                    src="./../assets/images/Yahoo_News_Logo-2048x569.png"
                    alt=""
                  /> */}
              </div>
            </Link>
            <div className="input">
              <div className="inp">
                <input
                  // onChange={(e) => {
                  //   setValue(e.target.value);
                  //   dispatch(search(e.target.value));
                  // }}
                  placeholder="search"
                  type="text"
                />
              </div>
              <div className="search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#ffffff", fontWeight: "bold" }}
                />
              </div>
            </div>
          </div>
          <div className="header-right">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "16px",
                fontWeight: "500",
              }}
              to="/login"
            >
              Login
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "16px",
                fontWeight: "500",
              }}
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="links">
            <div className="link">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "15px",
                }}
                to="/home"
              >
                Today's news
              </Link>
            </div>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "15px",
              }}
              to="/politics"
            >
              Politics
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "15px",
              }}
              to="/world"
            >
              World
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "15px",
              }}
              to="/health"
            >
              Health
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "15px",
              }}
              to="/science"
            >
              Science
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
