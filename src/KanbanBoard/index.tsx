import { createStyles, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import BoardBox from "../Components/BoardBox";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      flexGrow: 1,
    },
  })
);

const KanbanBoard: React.FC = (): JSX.Element => {
  const classes = useStyles();
  
  return (
    <>
      <Grid
        container
        justify="center"
        spacing={6}
        className={classes.container}
      >
        <Grid item sm={4}>
          <BoardBox title={"To Do"}>
          </BoardBox>
        </Grid>
        <Grid item sm={4}>
          <BoardBox title={"In Progress"}>
          </BoardBox>
        </Grid>
        <Grid item sm={4}>
          <BoardBox title={"Done"}>
          </BoardBox>
        </Grid>
      </Grid>
    </>
  );
};

export default KanbanBoard;
