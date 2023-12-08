import { useContext, useEffect } from "react";
import GoogleMap from "../components/GoogleMap";
import HeaderDiv from "../components/HeaderDiv";
import AppContext from "../Context/Context";

const SingleMap = () => {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    fetch(
      import.meta.env.VITE_REACT_APP_BACKEND +
        "/api/maps" +
        state.selectedPerson
    )
      .then((data) => data.json())
      .then((data) => {
        setState!({ ...state, markers: [data.body] });
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
