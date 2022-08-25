import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootSearch: {
      "& .MuiTextField-root": {
        width: "100%",
      },
    },
  })
);

type quantitySelectCartProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLDivElement>;
  value: string;
};

export default function SearchTextField({
  onChange,
  onKeyPress,
  value,
}: quantitySelectCartProps) {
  const classes = useStyles();

  return (
    <form className={classes.rootSearch} noValidate autoComplete="off">
      <TextField
        id="search-textfield"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={value || ""}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </form>
  );
}
