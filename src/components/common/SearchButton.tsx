import React from "react";
import { NavLink } from "react-router-dom";
import { GrayButton } from "../reusableComponents/ButtonGray";

type SearchButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  value: string;
};

export default function SearchButton({ onClick, value }: SearchButtonProps) {
  const SearchButtonSwitch = () => {
    if (value === "") {
      return (
        <GrayButton variant="contained" color="primary" disabled={true}>
          Search
        </GrayButton>
      );
    } else {
      return (
        <NavLink to={`/search/query=${value}`}>
          <GrayButton onClick={onClick} variant="contained" color="primary">
            Search
          </GrayButton>
        </NavLink>
      );
    }
  };

  return (
    <div className="search-button">
      <SearchButtonSwitch />
    </div>
  );
}
