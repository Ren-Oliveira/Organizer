import { ListItemText, Typography } from "@mui/material";

const LinkName = ({ title, subtitle }) => {
  return (
    <ListItemText
      primary={
        <Typography variant="h6" style={{ fontWeight: "bold", color: "wheat" }}>
          {title}
        </Typography>
      }
      secondary={
        subtitle && (
          <Typography variant="body2" style={{ color: "white" }}>
            {subtitle}
          </Typography>
        )
      }
    />
  );
};

export default LinkName;
