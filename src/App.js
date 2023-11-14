import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/Settings";
import Navigation from "./components/Navigation/Navigation";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route
          path="/settings"
          element={<SettingsPage></SettingsPage>}
          children={() => <h2>Our news</h2>}
        />
        <Route path="/*" component={AccountPage} />
      </Routes>
    </>
  );
}

export default App;
