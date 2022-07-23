import React, { useState } from "react";
import "./Service.css";

const Service = ({ user }) => {
  const { name, birth_year, height, mass, gender, created, skin_color, edited } = user;
  const [expand, setExpand] = useState(false);
  return (
    <div className="user">
      <div className="user_details">
        <div className="name">
          <h5>Name</h5>
          <p>{name}</p>
        </div>
        <div className="b_year">
          <h5>Birth Year</h5>
          <p>{birth_year}</p>
        </div>
        <div className="detail_btn" onClick={() => setExpand(!expand)}>
          {expand ? <button>Hide Detail</button> : <button>View Detail</button>}
        </div>
      </div>

      {expand && (
        <div className="user_detail">
          <div className="more_detail">
            <div className="">
              <div>
                  <h5>Height</h5>
                  <p>{height}</p>
              </div>
              <div>
                  <h5>Mass</h5>
                  <p>{mass}</p>
              </div>
              <div>
                  <h5>Gender</h5>
                  <p>{gender}</p>
              </div>
              <div>
                  <h5>Skin Color</h5>
                  <p>{skin_color}</p>
              </div>
            </div>
            <div>
              <div>
                  <h5>Created</h5>
                  <p>{created}</p>
              </div>
              <div>
                  <h5>Edited</h5>
                  <p>{edited}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
