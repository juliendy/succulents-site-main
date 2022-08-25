import React from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function NotFoundPage() {
  const isMobile = useMediaQuery("(max-width:950px)");

  return (
    <div
      className={
        isMobile
          ? "not-found_container_mobile"
          : "not-found_container_big-screen"
      }
    >
      <div className="not-found">
        This page is no longer available.
        <p>
          <NavLink to={`/`} style={{ textDecoration: "underline" }}>
            Home
          </NavLink>
        </p>
      </div>
    </div>
  );
}
