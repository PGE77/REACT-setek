import "./Book.css";
import OrderButton from "./OrderButton";

const Book = (props) => {
  return (
    <div className="one-book">
        <img src={props.myimage} alt=""/>
      <h2 className="main-heading">{props.mytitle}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        voluptatum tempora aperiam alias dolor dolores unde, debitis aliquam
        voluptatem? Aperiam commodi perferendis nobis voluptates deserunt quasi
        suscipit non veritatis fugit.
      </p>

      <OrderButton></OrderButton>
    </div>
  );
};

export default Book;
