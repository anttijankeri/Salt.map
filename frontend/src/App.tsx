import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import Home from "./pages/Home";
import AddPin from "./pages/AddPin";
import BrowsePins from "./pages/BrowsePins";
import SingleMap from "./pages/SingleMap";
import AllMap from "./pages/AllMap";

import "./style.css";

import AppContext from "./Context/Context";

const App = () => {
  const { makeQuery } = useContext(AppContext);

  useEffect(() => {
    makeQuery!();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/add" Component={AddPin} />
        <Route path="/browse" Component={BrowsePins} />
        <Route path="/single" Component={SingleMap} />
        <Route path="/all" Component={AllMap} />
      </Routes>
    </main>
  );
};

export default App;
