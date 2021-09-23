import { makeStyles } from "@material-ui/core";
import PaddingTop from "../Common/PaddingTop";
import { getRandomColor } from "../../services/getRandomColor";
import { timeAgo } from "../../services/dateFormatter";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 16,
    marginBottom: 10,
    padding: "22px 18px",
    border: "1px solid #e2e2e2",
  },
  text: {
    fontFamily: "Verdana, Arial, sans-serif",
    fontSize: 15,
    color: "#171717",
  },
  subText: {
    fontSize: 12,
    fontFamily: "Helvetica, Arial, sans-serif",
    color: "#5a5a5a",
  },
}));

export default function Post({ text, date = new Date() }) {
  const classes = useStyles();

  const [color1, color2] = getRandomColor();

  const gradientString = `linear-gradient(147deg, ${color1}, ${color2})`;

  return (
    <div className={classes.root} style={{ background: gradientString }}>
      <div>
        <div className={classes.subText}>anonymous</div>
      </div>
      <PaddingTop paddingTop={10} />
      <div className={classes.text}>{text}</div>
      <div className={classes.subText}>{timeAgo(date)}</div>
    </div>
  );
}
