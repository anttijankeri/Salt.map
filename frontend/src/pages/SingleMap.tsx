import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";

const SingleMap = () => {
  return (
    <>
      <HeaderDiv header="Map" link="/browse" />
      <GoogleMap />
    </>
  );
};

export default SingleMap;
