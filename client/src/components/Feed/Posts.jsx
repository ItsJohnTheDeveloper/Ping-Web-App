import { makeStyles } from "@material-ui/core";
import PullToRefresh from "react-simple-pull-to-refresh";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    borderBottom: "3px solid #f4f4f4",
    padding: "10px 10px 0px",
    overflowY: "scroll",
    display: "block",
    position: "fixed",
    top: 64, // height of navbar
    right: 0,
    left: 0,
    bottom: 53, // height of pullout chat widget
  },
}));

export default function Posts({ children, postsRef, pullToRefresh }) {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={postsRef}>
      <PullToRefresh
        onRefresh={pullToRefresh}
        pullingContent={null}
        refreshingContent={<CircularProgress />}
      >
        {children}
      </PullToRefresh>
    </div>
  );
}
