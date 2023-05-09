import useFetch from "./useFetch";

const apiUrl = "http://api.open-notify.org/iss-now.json";

const Coordinates = () => {

const {data, loading} = useFetch(apiUrl)


  return (
    <div>
      <div>
        {loading ? "loading..." : `${data.iss_position.latitude}  ${data.iss_position.longitude}`}
      </div>
    </div>
  );
};

export default Coordinates;
