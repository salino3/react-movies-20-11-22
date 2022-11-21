import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DataPage = ({first}) => {

  const { title } = useParams();

  let arrow = "<-";
 
  return (
    <>
      {!first
        ? "Loading.."
        : first.entries
            .filter((element) => element.title === title)
            .map((item, index) => (
              <div key={index} className="divFullCard">
                <h2>
                  {" "}
                  <span className="spanGoBack">
                    <Link to={"/"}>{arrow} Go back</Link>
                  </span>{" "}
                  <span>Title: </span>
                  {item.title} &nbsp; <span> Release: </span>
                  {item.releaseYear}
                </h2>
                <h3 className="itemDescription">{item.description}</h3>
                <img
                  width={`${item.images.posterArt.width}`}
                  src={`${item.images.posterArt.url}`}
                  alt="imagen"
                />
              </div>
            ))}
    </>
  );
}

export default DataPage