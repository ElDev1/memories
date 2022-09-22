import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container-card">
      <img
        src="https://i.pinimg.com/736x/5a/9b/7a/5a9b7ae26064cb7e9c11c9a306333cd7.jpg"
        alt=""
        className="img-responsive"
      />
      <div className="container-body">
        <div>
          <span className="tag-card">#Animals</span>
          <span className="tag-card">#Travel</span>
          <span className="tag-card">#Mountain</span>
        </div>
        <h1 className="title-card">Visiting Machu Picchu</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          sequi ex omnis natus quasi aspernatur laborum eaque odio illo nulla
          quos numquam voluptates molestias nam, explicabo incidunt fugit
          exercitationem earum!
        </p>
        <div className="container-features">
          <h1 class="like-button">Likes</h1>
          <div>
            <button className="edit-feature">Edit</button>
            <button className="delete-feature">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
