import React from 'react';
import { Link } from 'react-router-dom';

function serchTerm(term) {
  
  return function (x) {
  // I convert the info from 'first' in lowercase during the process of 'filter' method
    let tlc = x.title.toLowerCase();
    return tlc.includes(term) || !term;
  };
};

const Card = ( {second, first}) => {

  return (
    <>
      {!first
        ? "Cargando.."
        : first.entries.filter(serchTerm(second)).map((item, index) => (
            <div className="divTitle" key={index}>
              <div>
                <Link to={`/movie/${item.title}`}>{item.title} </Link>
              </div>
              <Link to={`/movie/${item.title}`}>
                <img
                  width={"100"}
                  src={`${item.images.posterArt.url}`}
                  alt="illustration"
                />
              </Link>
            </div>
          ))}
    </>
  );
};

export  default Card

