import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { obj } from "../../redux/slices/newsSlice";
import { useDispatch } from "react-redux";
import { addNews } from "../../redux/slices/newsSlice";

function CreateNews() {
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [newsHead, setNewsHead] = useState<string>("");
  const [newsInp, setNews] = useState<string>("");
  const [seen, setSeen] = useState<number>(0);
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "70%",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <TextField
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        id="standard-basic"
        label="category(Politics, Health, World, Science)"
        variant="standard"
      />
      <TextField
        onChange={(e) => {
          setImage(e.target.value);
        }}
        id="standard-basic"
        label="image"
        variant="standard"
      />
      <TextField
        onChange={(e) => {
          setNewsHead(e.target.value);
        }}
        id="standard-basic"
        label="newsHead"
        variant="standard"
      />
      <TextField
        onChange={(e) => {
          setNews(e.target.value);
        }}
        id="standard-basic"
        label="news"
        variant="standard"
      />
      <TextField
        onChange={(e) => {
          setSeen(Number(e.target.value));
        }}
        id="standard-basic"
        label="seen"
        variant="standard"
        type="number"
      />
      <TextField
        onChange={(e) => {
          setLike(Number(e.target.value));
        }}
        id="standard-basic"
        label="like"
        variant="standard"
        type="number"
      />
      <TextField
        onChange={(e) => {
          setDislike(Number(e.target.value));
        }}
        id="standard-basic"
        label="dislike"
        variant="standard"
        type="number"
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (category && newsHead && newsInp) {
            const object: obj = {
              id: uuidv4(),
              category: category,
              image: image,
              newsHead: newsHead,
              news: newsInp,
              seen: seen,
              like: like,
              dislike: dislike,
              date: new Date(),
            };
            console.log(object);
            dispatch(addNews(object));
          }
        }}
        variant="contained"
        color="success"
      >
        Create
      </Button>
    </div>
  );
}

export default CreateNews;
