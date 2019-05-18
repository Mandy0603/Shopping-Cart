import React from "react";

const StarButton = () => {
  return (
    <div>
      <small>Leave a star on Github if this repository was useful :)</small>
      <a
        class="github-button"
        href="http://localhost:3000"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star jeffersonRibeiro/react-shopping-cart on GitHub"
      >
        Star
      </a>
    </div>
  );
};

export default StarButton;
