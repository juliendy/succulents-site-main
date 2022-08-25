import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppContextSearch } from "../../context/ContextSearch";
import { Types } from "../../context/ReducersSearch";
import { PopperPlacementType } from "@material-ui/core/Popper";
import SearchIcon from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import RichTooltip from "./RichTooltip";
import SearchContents from "./SearchContents";
import { useStyles } from "./NavigationItemStyles";

export default function Search() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick = (newPlacement: PopperPlacementType) => () => {
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const [letters, setLetters] = useState("");
  const handleChangeLetters = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLetters(event.target.value);
  };

  const { state, dispatch } = useContext(AppContextSearch);
  const handleUpdateLetters = () => {
    dispatch({
      type: Types.UpdateLetters,
      payload: { search: letters },
    });
    handleClickAway();
  };

  const history = useHistory();
  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && letters !== "") {
      event.preventDefault();
      handleUpdateLetters();
      history.push(`/search/query=${letters}`);
    }
  };

  useEffect(() => {
    setLetters("");
  }, [state.search]);

  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <RichTooltip
          content={
            <SearchContents
              onChange={handleChangeLetters}
              onClick={handleUpdateLetters}
              onKeyPress={handleOnKeyPress}
              value={letters}
            />
          }
          open={open}
          placement="bottom"
          onClose={() => setOpen(false)}
        >
          <div style={{ marginTop: "-10px" }}>
            <button onClick={handleClick("bottom-end")} className={isMobile ? "search-icon_mobile" : "search-icon_bigger-screen"} >
              <SearchIcon style={{ fontSize: "34px" }} />
            </button>
          </div>
        </RichTooltip>
      </div>
    </ClickAwayListener>
  );
}
