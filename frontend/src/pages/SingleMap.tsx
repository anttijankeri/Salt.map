import { useContext, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";
import AppContext from "../Context/Context";

import "../style.css";
import { NamedMarker } from "../types";

const SingleMap = () => {
  const { state, makeQuery } = useContext(AppContext);

  useEffect(() => {
    makeQuery!();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderDiv header="Map" link="/browse" />
      <GoogleMap
        markers={[
          state.markers.find((marker) => {
            return marker.hash === state.selectedPerson;
          }) as NamedMarker,
        ]}
        lat={state.startLat}
        lng={state.startLng}
      />
    </>
  );
};

export default SingleMap;
