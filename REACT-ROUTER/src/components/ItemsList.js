import { NavLink } from "react-router-dom";
import odstranDiakritiku from "./odstranDiakritiku";

const ItemsList = ({ items }) => {
  return (
    <section>
      <div className="all-movies">
        {items.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;
          return (
            <NavLink
              key={id}
              to={`/all-movies/${id}/${odstranDiakritiku(title)}`}
              className={({ isActive }) =>
                isActive ? "activeLink one-movie" : "noActiveLink one-movie"
              }
            >
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default ItemsList;
