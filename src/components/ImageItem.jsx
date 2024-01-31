import PropTypes from "prop-types";
import "./ImageItem.css";

export const ImageItem = ({ image }) => {
  return (
    <div>
      <img
        className="images"
        src={image.urls.small}
        alt={image.alt_description}
      ></img>
    </div>
  );
};

ImageItem.propTypes = {
  image: PropTypes.array,
};
