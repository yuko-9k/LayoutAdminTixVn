import React from "react";
import NavbarAdmin from "../../components/NavbarAdmin/index";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function LayoutAdmin(props) {
  return (
    <div>
      <NavbarAdmin />
      {props.children}
    </div>
  );
}

function AdminLayout({ Component, ...props }) {
  const { user } = props;
  console.log(user);
  if (!user) return <Redirect to="/login" />;
  if (user?.maLoaiNguoiDung === "QuanTri") {
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
  } else return <Redirect to="/" />;
}

const mapStateToProps = (state) => {
  return {
    user: state.AuthReducer.data,
  };
};

export default connect(mapStateToProps, null)(AdminLayout);
