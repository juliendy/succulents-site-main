import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

type quantityProps = {
  onChange: (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => void;
  value: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 90,
    },
  })
);

export default function Quantityselect({ onChange, value }: quantityProps) {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            native
            defaultValue={value}
            onChange={onChange}
            inputProps={{
              name: "quantity",
              id: "quantity-select-inside-in-cart_dropDown",
            }}
          >
            <option value={"0"}>0 (Delete)</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
            <option value={"6"}>6</option>
            <option value={"7"}>7</option>
            <option value={"8"}>8</option>
            <option value={"9"}>9</option>
            <option value={"10"}>10+</option>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
