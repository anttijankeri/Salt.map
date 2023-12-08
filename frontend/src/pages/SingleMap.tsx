import { useContext, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";
import AppContext from "../Context/Context";
import decodeMarkers from "../utils/decodeMarkers";

import "../style.css";

const SingleMap = () => {
  const { state, updateState } = useContext(AppContext);

  useEffect(() => {
    fetch(
      "https://saltmap-production.up.railway.app/api/maps/" +
        state.selectedPerson
    )
      .then((data) => data.json())
      .then((data) => {
        updateState!({ ...state, markers: decodeMarkers([data]) });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selectedPerson]);

  return (
    <>
      <HeaderDiv header="Map" link="/browse" />
      <GoogleMap markers={state.markers} />
    </>
  );
};

export default SingleMap;
