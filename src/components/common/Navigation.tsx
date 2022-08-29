import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CategoryData } from "../../data/CategoryData";
import CartPreview from "./CartPreview";
import Search from "./Search";

type Anchor = "left";

export default function Navigation() {
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerState({ ...drawerState, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {CategoryData.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText>
              <NavLink
                to={`/product/${item.categoryName}`}
                className="drawer-link-text"
              >
                {item.categoryName}
                <KeyboardArrowRightIcon
                  className="arrow-icon"
                  style={{ fontSize: "30px" }}
                />
              </NavLink>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const [change, setChange] = useState(false);
  const changePosition = 50;
  let position = useWindowScrollPosition();
  if (position.y > changePosition && !change) {
    setChange(true);
  }
  if (position.y <= changePosition && change) {
    setChange(false);
  }
  let style = {
    backgroundColor: change ? "rgb(243, 243, 243)" : "transparent",
    transition: "400ms ease",
  };

  const isMobile = useMediaQuery("(max-width:599px)");

  if (isMobile) {
    return (
      <div>
        {(["left"] as Anchor[]).map((anchor) => (
          <div key={anchor} className="navbar" style={style}>
            <React.Fragment key={anchor}>
              <button
                onClick={toggleDrawer(anchor, true)}
                className="menu-icon"
              >
                <MenuIcon style={{ fontSize: "40px" }} />
              </button>
              <SwipeableDrawer
                anchor={anchor}
                open={drawerState[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
            <div className="logo_mobile">
              <NavLink to="/">
                Happy
                <br />
                Succulents
              </NavLink>
            </div>
            <Search />
            <CartPreview />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="navbar" style={style}>
        <div className="logo_bigger-screen">
          <NavLink to="/">
            Happy
            <br />
            Succulents
          </NavLink>
        </div>
        {CategoryData.map((item, index) => (
          <NavLink
            to={`/product/${item.categoryName}`}
            className="nav-link-text"
            key={index}
          >
            {item.categoryName}
          </NavLink>
        ))}
        <Search />
        <CartPreview />
      </div>
    );
  }
}
