import React from "react";
import { Route, Routes } from "react-router-dom";

import { publicRoutes, privateRoutes } from "./router/routes";

import './App.css'
import AuthRequire from "./hoc/AuthRequire";

function App() {
  const privatePages = privateRoutes.map((route) => (
    <Route
      element={<AuthRequire>{route.element}</AuthRequire>}
      path={route.path}
      key={route.path}
    />
  ));

  const publicPages = publicRoutes.map((route) => (
    <Route element={route.element} path={route.path} key={route.path} />
  ));

  return (
    <div className='app'>
      <Routes>
        {privatePages}
        {publicPages}
      </Routes>
    </div>
  );
}

export default App;
