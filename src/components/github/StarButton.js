import React from "react";

const StarButton = () => {
  return (
    <div className="star-button-container">
      <small>Leave a star on Github if this repository was useful :)</small>
      <a
        className="github-button"
        href="https://github.com/ntkme/github-buttons"
        data-icon="octicon-star"
        aria-label="Star ntkme/github-buttons on GitHub"
      >
        Star
      </a>
    </div>
  );
};

export default StarButton;
