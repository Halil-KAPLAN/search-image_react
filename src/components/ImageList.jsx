import PropTypes from "prop-types";
import { ImageItem } from "./ImageItem";
import "./ImageList.css";

export const ImageList = ({ images }) => {
  return (
    <div className="imageList">
      {images.map((image, i) => (
        <ImageItem image={image} key={i} />
      ))}
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array,
};
