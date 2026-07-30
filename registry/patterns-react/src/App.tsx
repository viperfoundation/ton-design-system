import { Suspense, lazy, useEffect } from "react";
import "./theme";
import { useCore } from "./hooks/useCore";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";
import { ViperComponent } from "./routes/viper";

const V2Component = lazy(() =>
  import("./v2/src/app.jsx").then((module) => ({
    default: module.V2Component ?? module.default,
  }))
);

function RootRedirect() {
  const location = useLocation();

  return (
    <Navigate
      to={{
        pathname: "/landing",
        hash: location.hash,
      }}
      replace
    />
  );
}

function RouteHashScroller() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = decodeURIComponent(location.hash.slice(1));
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [location.hash, location.pathname]);

  return null;
}

const App = () => {
  useCore();

  return (
    <BrowserRouter>
      <RouteHashScroller />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/landing" element={<ViperComponent />} />
        <Route
          path="/tds"
          element={
            <Suspense fallback={null}>
              <V2Component />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
