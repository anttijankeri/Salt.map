import InputButton from "../components/InputButton";
import { Link } from "react-router-dom";

import "../style.css";

const Home = () => {
  return (
    <>
      <h1 className="header">Salt.map</h1>
      <Link to="/add">
        <InputButton text={"Add Pin"} />
      </Link>
      <Link to="/browse">
        <InputButton text={"Browse Pins"} />
      </Link>
      <Link to="/all">
        <InputButton text={"All Pins"} />
      </Link>
    </>
  );
};

export default Home;
