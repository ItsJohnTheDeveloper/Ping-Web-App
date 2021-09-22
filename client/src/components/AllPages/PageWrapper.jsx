import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f4f4f4",
    height: "100vh",
    margin: 0,
    padding: 0,
  },
}));

export default function PageWrapper({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      {children}
    </div>
  );
}
