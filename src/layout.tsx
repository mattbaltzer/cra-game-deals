import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import "./layout.css";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <main>{children}</main>
      <footer>@ {new Date().getFullYear()}</footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
