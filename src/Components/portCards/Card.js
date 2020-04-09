import React from "react";
import './Card.css'


function Card({url, image, git, name}) {
   
    return (
    <div className="col s12 m6 xl4">
        <div className="card portCard z-depth-2 flow-text">
          <div className="card-image z-depth-1 flow-text">
            <a href={url} rel="noopener noreferrer nofollow" target="_blank"> <img className="portImage"
                src={image} />
              <button className="btn-floating halfway-fab waves-effect waves-light light-blue gitButtons"
                onClick={() => window.open(git, "_blank")} rel="noopener noreferrer nofollow" target="_blank"><i className="fab fa-github fa-lg"></i></button>
              <span className="card-title portCardTitle valign-wrapper flow-text z-depth-3">{name}</span></a>
          </div>
        </div>
      </div>

      );
  }


export default Card;
