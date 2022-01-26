import { Button } from "@mui/material";

const AddButton = (props) => {
  return (
    <Button
      variant="contained"
      type="submit"
      size="large"
      color={!props.hasError ? "secondary" : "error"}
      style={{ width: "100%", height: "100%" }}
      aria-label={props.aria}
      onClick={props.onClick}
    >
      <strong> {!props.hasError ? "Add" : "X"} </strong>
    </Button>
  );
};

export default AddButton;
