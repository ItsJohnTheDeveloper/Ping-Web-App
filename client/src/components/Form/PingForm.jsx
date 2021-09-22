import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    color: "#171717",
    fontFamily: "Verdana, Arial, sans-serif",
    fontSize: 24,
    lineHeight: 1.3,
    wordBreak: "break-word",
    resize: "none",
    width: "100%",
    padding: "0px 16px",
    border: "none !important",
    "-webkit-appearance": "button",
    "-moz-appearance": "button",
    appearance: "button",
    "&:focus": {
      outline: "none !important",
    },
    "&::placeholder": {
      // color: theme.palette.text.placeholder,
      fontWeight: "normal",
    },
  },
}));

export default function PingForm({ onClick, open }) {
  const classes = useStyles();
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onClick(text);
    }
  };

  return (
    <>
      {open ? (
        <TextareaAutosize
          className={classes.root}
          onChange={handleTextChange}
          minRows={5}
          placeholder={"Write your Ping!"}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : null}
    </>
  );
}
