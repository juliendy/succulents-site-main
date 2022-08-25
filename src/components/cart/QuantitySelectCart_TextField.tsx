import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        width: 91,
      },
    },
  })
);

type quantitySelectCartProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
};

export default function QuantitySelectCart({
  onChange,
  value,
}: quantitySelectCartProps) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        defaultValue={value}
        onChange={onChange}
      />
    </form>
  );
}
