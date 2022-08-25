import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
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
      margin: theme.spacing(0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function Quantityselect({ onChange, value }: quantityProps) {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <div className="quantity-select">
        <FormControl variant="outlined" className={classes.formControl}>
          <div style={{ zIndex: -1 }}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Quantity
            </InputLabel>
          </div>
          <Select
            native
            value={value}
            onChange={onChange}
            label="Quantity"
            inputProps={{
              name: "quantity",
              id: "outlined-age-native-simple",
            }}
          >
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
          </Select>
        </FormControl>
      </div>
    </form>
  );
}
