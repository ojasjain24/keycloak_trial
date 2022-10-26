import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import WelcomePage from "./pages/home";
import SecuredPage from "./pages/secured";
import PrivateRoute from "./helpers/privateRoute";
import Home from "./pages/home";
import Secured from "./pages/secured";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <Secured />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
 }
 
 export default App;