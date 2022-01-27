import { TextField, Typography, MenuItem } from "@mui/material";
import uniqid from "uniqid";

export default function InputDateItem(props) {
  return (
    <>
      <TextField
        select
        style={{
          width: "100%",
          backgroundColor: "#192333",
        }}
        label={
          <Typography
            variant="h6"
            fontWeight={"bold"}
            style={{ color: "#deadad" }}
          >
            {props.label}
          </Typography>
        }
        variant="filled"
        aria-label={props.ariaLabel}
      >
        {props.options.map((option) => {
          return (
            <MenuItem
              value={option}
              key={uniqid()}
              style={{
                height: "1rem",
                fontWeight: "bold",
                background: "#192333",
                color: "#deadad",
                textAlign: "center",
              }}
            >
              {option}
            </MenuItem>
          );
        })}
      </TextField>
    </>
  );
}
