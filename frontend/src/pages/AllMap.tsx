import { useContext, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";
import AppContext from "../Context/Context";
import decodeMarkers from "../utils/decodeMarkers";

const AllMap = () => {
  const { state, updateState } = useContext(AppContext);

  useEffect(() => {
    fetch(import.meta.env.VITE_REACT_APP_BACKEND + "/api/maps")
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
