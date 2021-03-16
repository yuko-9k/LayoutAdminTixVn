import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import { Route, Redirect } from "react-router-dom";

function LayoutAdmin(props) {
  return (
    <div>
      <NavbarAdmin />
      {props.children}
    </div>
  );
}

export default function AdminLayout({ Component, ...props }) {
  useEffect(() => {
    if (!sessionStorage.getItem("userAdmin")) {
      <Redirect to="/login" />;
    }
  }, []);
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <LayoutAdmin>
            <Component {...propsComponent} />
          </LayoutAdmin>
        );
      }}
    />
  );
}
