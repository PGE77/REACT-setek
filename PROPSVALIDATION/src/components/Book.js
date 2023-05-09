import PropTypes from "prop-types";
import defaultImage from "../images/500.png";

const Book = ({ id, image, title, price }) => {
  return (
    <div>
      <h2>{title || "Defaultní text"}</h2>
      <img src={image || defaultImage} alt="" />
      <p>{price || 1000}</p>
    </div>
  );
};

Book.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Book.defaultProps = {
//   image: defaultImage,
//   title: "Defaultní název",
//   price: 1000,
// };





console.log(Book)

export default Book;
