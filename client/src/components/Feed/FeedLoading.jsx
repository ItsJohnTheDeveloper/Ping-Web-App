import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    borderBottom: "3px solid #f4f4f4",
    padding: "10px 10px 0px",
    backgroundColor: "white",
  },

  profileText: {
    fontSize: 12,
    fontFamily: "Helvetica, Arial, sans-serif",
    color: "#272727",
  },
  feedItem: {
    padding: "22px 18px",
    border: "1px solid #d8d8d8",
    borderRadius: 16,
    marginBottom: 10,
    minHeight: 110,
    animationDuration: "0.85s",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    animationName: "$loading-shimmer",
    animationTimingFunction: "ease-in-out",
    background:
      "linear-gradient(.27turn, #e8f0f5 3%, #d8e3e8 13%, #e8f0f5 45%)",
    backgroundSize: "1698px 23px",
  },
  "@keyframes loading-shimmer": {
    "0%": { backgroundPosition: "-468px 0" },
    "100%": { backgroundPosition: "468px 0" },
  },
}));

export default function FeedLoading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.feedItem} />
      <div className={classes.feedItem} />
      <div className={classes.feedItem} />
      <div className={classes.feedItem} />
      <div className={classes.feedItem} />
      <div className={classes.feedItem} />
      <div className={classes.feedItem} />
    </div>
  );
}
