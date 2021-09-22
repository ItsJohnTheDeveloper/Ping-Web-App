import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    borderBottom: "3px solid #f4f4f4",
    padding: "10px 10px 0px",
  },
}));

export default function Posts({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}
