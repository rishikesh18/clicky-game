import React from "react";
import "./Image.css";

const Image = props => (
  <div className = "col-md-2">
  <div className="image">
      <img id={props.id} src={props.url}
        onClick={() => props.handleImageChange(props.id)} alt="clicky game" />
  </div>
  </div>
);

export default Image;