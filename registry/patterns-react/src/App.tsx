import { Suspense, lazy } from "react";
import "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootComponent } from "./routes/__root";
import { HomeComponent } from "./routes/index";
import { ThemeComponent } from "./routes/theme";
import { LottiesComponent } from "./routes/lotties";
import { LottiesTonPackComponent } from "./routes/lotties_tonpack";
import { ViperComponent } from "./routes/viper";

const V2Component = lazy(() =>
  import("./v2/src/app.jsx").then((module) => ({
    default: module.V2Component ?? module.default,
  }))
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="theme" element={<ThemeComponent />} />
          <Route
            path="v2"
            element={
              <Suspense fallback={null}>
                <V2Component />
              </Suspense>
            }
          />
          <Route path="viper" element={<ViperComponent />} />
          <Route path="lotties" element={<LottiesComponent />} />
          <Route path="lotties_tonpack" element={<LottiesTonPackComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
