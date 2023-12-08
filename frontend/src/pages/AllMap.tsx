import { useContext, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";
import AppContext from "../Context/Context";
import decodeMarkers from "../utils/decodeMarkers";

import "../style.css";

const AllMap = () => {
  const { state, updateState } = useContext(AppContext);

  useEffect(() => {
    fetch("saltmap-production.up.railway.app/api/maps")
      .then((data) => data.json())
      .then((data) => {
        updateState!({ ...state, markers: decodeMarkers(data) });
      });
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
