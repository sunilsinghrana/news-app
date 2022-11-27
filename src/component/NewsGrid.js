import React from "react";
import { useSelector } from "react-redux";
import { getAllArticle } from "../app/news/newsSlice";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

const NewsGrid = () => {
  const dataItem = useSelector(getAllArticle);
  let response = "";
  response =
    dataItem.status === "ok" ? (
      dataItem.articles.map((item, id) => <Newsitem item={item} key={id} />)
    ) : (
      <div className="text-center">
      </div>
    );
  return (
    <div>
      <div className="text-center my-6">
      {dataItem.status !== 'ok' ? <Spinner/> : ''}
      </div>
      <div className="px-4 w-full mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {response}
      </div>
      <div className="btn-group flex justify-center items-center my-6">
        <button className="btn btn-outline text-white">See more</button>
      </div>
    </div>
  );
};

export default NewsGrid;
