import React from "react";
import Fade from "@material-ui/core/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchButton from "./SearchButton";
import SearchTextField from "./SearchTextField";

type SearchProps = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyPress: React.KeyboardEventHandler<HTMLDivElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function SearchContents({
  onClick,
  onKeyPress,
  onChange,
  value,
}: SearchProps) {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div>
      <Fade timeout={350}>
        <div style={{ visibility: "visible", opacity: "inherit" }}>
          <div
            className={
              isMobile
                ? "search_container_mobile"
                : "search_container_bigger-screen"
            }
          >
            <SearchTextField
              onChange={onChange}
              value={value}
              onKeyPress={onKeyPress}
            />
            <SearchButton onClick={onClick} value={value} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
