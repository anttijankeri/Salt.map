import { useContext, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";
import AppContext from "../Context/Context";

const SingleMap = () => {
  const { state } = useContext(AppContext);

  useEffect(() => {}, [state.selectedPerson]);

  return (
    <>
      <HeaderDiv header="Map" link="/browse" />
      <GoogleMap markers={state.markers} />
    </>
  );
};

export default SingleMap;
