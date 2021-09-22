import { AppBar } from "@material-ui/core";
import { makeStyles, Typography, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none",
    backgroundColor: "white",
    // borderBottom: "10px solid #f4f4f4",
  },
  logo: {
    background: "linear-gradient(45deg, #78f3e0, #365aab)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: 15,
    fontFamily: "Verdana, Arial, sans-serif",
  },
}));

export default function PageWrapper() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography className={classes.logo}>PING!</Typography>
      </Toolbar>
    </AppBar>
  );
}
