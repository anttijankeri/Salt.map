import { useContext, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";
import AppContext from "../Context/Context";

import "../style.css";

const AllMap = () => {
  const { state, makeQuery } = useContext(AppContext);

  useEffect(() => {
    makeQuery!();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderDiv header="Map" link="/" />
      <GoogleMap markers={state.markers} />
    </>
  );
};

export default AllMap;
