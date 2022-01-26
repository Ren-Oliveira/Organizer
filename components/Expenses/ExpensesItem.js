import { useState } from "react";
import { formatDate } from "../../helpers/formatDate";
import {
  ListItemText,
  ListItemButton,
  Typography,
  Collapse,
  Grid,
} from "@mui/material/";
import classes from "./ExpensesItem.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpensesItem = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const deleteHandler = () => {
    props.onDelete(props.exID);
  };

  return (
    <div className={`${classes.row} ${classes[props.exCategory]}`}>
      <ListItemButton onClick={() => setIsExpanded(!isExpanded)}>
        <ListItemText
          primary={
            <Grid container columns={2} spacing={6}>
              <Grid item xs={0.5}>
                <Typography variant="h6" className={classes.text}>
                  {props.exValue}€
                </Typography>
              </Grid>
              {props.exName && (
                <Grid item xs={1.5}>
                  <Typography variant="Body2" className={classes.text}>
                    {props.exName[0].toUpperCase() + props.exName.slice(1)}
                  </Typography>
                </Grid>
              )}
            </Grid>
          }
        />

        {isExpanded ? (
          <FaChevronUp className={classes.icon} />
        ) : (
          <FaChevronDown className={classes.icon} />
        )}
      </ListItemButton>
      <Collapse in={isExpanded} unmountOnExit>
        <Grid container justifyContent={"space-around"}>
          <Typography variant="subtitle2" className={classes.text}>
            Category: {props.exCategory}
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            Added: {formatDate(props.exDate)}
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.text}
            onClick={deleteHandler}
            style={{ cursor: "pointer", color: "pink" }}
          >
            Delete
          </Typography>
        </Grid>
      </Collapse>
    </div>
  );
};

export default ExpensesItem;
