import React from "react";

export default function DisplayContent(props) {
  if (props.name === "about") {
    return <div>Yes, this is working</div>;
  } else {
    return <div>Click any button to start!</div>;
  }
}
