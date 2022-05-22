import { Button } from "antd";
import Router from "next/router";
import React from "react";
import classes from "./Content.module.scss";
function Content() {
  return (
    <div className={classes.content}>
      <div className={classes.leftside}>
        <h1 className={classes.title}>
          “The beautiful thing about learning is that nobody can take it away
          from you.”
        </h1>
      </div>
      <div className={classes.rightside}>
        <h1 className={classes.start}>Start Today</h1>
        <Button
          type="primary"
          className={classes.button}
          onClick={() => Router.router!.push("./courses")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Content;
