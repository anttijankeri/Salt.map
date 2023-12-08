import { useContext, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";
import AppContext from "../Context/Context";

const AllMap = () => {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    fetch(import.meta.env.VITE_REACT_APP_BACKEND + "/api/maps")
      .then((data) => data.json())
      .then((data) => {
        setState!({ ...state, markers: data.body });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderDiv header="Map" link="/browse" />
      <GoogleMap markers={state.markers} />
    </>
  );
};

export default AllMap;
