import { ListItemText, Typography } from "@mui/material";

const LinkName = ({ title }) => {
  return (
    <ListItemText
      primary={
        <Typography variant="h6" style={{ color: "#Deadad" }}>
          {title}
        </Typography>
      }
    />
  );
};

export default LinkName;
