import InputButton from "../components/InputButton";

const Home = () => {
  return (
    <>
      <h1>Salt.map</h1>
      <InputButton text={"Add Pin"} />
      <InputButton text={"Browse Pins"} />
      <InputButton text={"All Pins"} />
    </>
  );
};

export default Home;
