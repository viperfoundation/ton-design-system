import { Suspense, lazy } from "react";
import "./theme";
import { useCore } from "./hooks/useCore";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ViperComponent } from "./routes/viper";

const V2Component = lazy(() =>
  import("./v2/src/app.jsx").then((module) => ({
    default: module.V2Component ?? module.default,
  }))
);

const App = () => {
  useCore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
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
