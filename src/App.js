import React from "react";
import { Router } from "@reach/router";
import Loading from "./components/Loading";
import { StateProvider } from "./StateContext";

import "./App.scss";

import Home from "./screens/Home";
const Quiz = React.lazy(() => import("./screens/Quiz"));
const Results = React.lazy(() => import("./screens/Results"));
const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <StateProvider>
        <Router>
          <Home path="/" />
          <Quiz path="/quiz/:id" />
          <Results path="/results" />
        </Router>
      </StateProvider>
    </React.Suspense>
  );
};

export default App;
