import Link from "next/link";
import React, { useState } from "react";
import classes from "./Header.module.scss";
import { Button, Modal, Input } from "antd";
import Router from "next/router";

function Header() {
  const [login, setLogin] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<string>("");
  const [pwStatus, setPwStatus] = useState<string>("");
  const [personData, setPersonData] = useState({
    email: "",
    password: "",
  });
  function okHandler() {
    if (
      personData.email.length < 10 ||
      !personData.email.includes(".com") ||
      !personData.email.includes("@")
    ) {
      setEmailStatus("error");
      return;
    }
    if (personData.password.length < 5) {
      setPwStatus("error");
      return;
    }
    setEmailStatus("");
    setPwStatus("");
    setLogin(false);
    setRegister(false);
    Router.router!.push("./courses");
  }
  function cancelHandler() {
    setPersonData({
      email: "",
      password: "",
    });
    setLogin(false);
    setRegister(false);
  }
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>
        SpudAcademy<span className={classes.emoji}>🤖</span>
      </h1>
      <div className={classes.navigation}>
        <Link href="./">
          <a>Home</a>
        </Link>
        <Link href="./courses">
          <a>Courses</a>
        </Link>
        <Link href="./about">
          <a>About</a>
        </Link>
      </div>
      <div className={classes.actions}>
        <Button
          type="default"
          size="large"
          className={classes.button}
          onClick={() => setLogin(!login)}
        >
          Login
        </Button>
        <Button
          type="primary"
          size="large"
          className={classes.button}
          onClick={() => setRegister(!register)}
        >
          Register
        </Button>
      </div>
      <Modal
        title="Login"
        visible={login}
        onOk={okHandler}
        okText={"Login"}
        onCancel={cancelHandler}
      >
        <p>Email address</p>
        <Input
          placeholder="Email"
          maxLength={30}
          minLength={10}
          status={emailStatus && "error"}
          onChange={(e) =>
            setPersonData((old) => ({
              ...old,
              email: e.target.value,
            }))
          }
        />
        <p>Password</p>
        <Input.Password
          placeholder="Password"
          maxLength={15}
          minLength={5}
          status={pwStatus && "error"}
          onChange={(e) =>
            setPersonData((old) => ({
              ...old,
              password: e.target.value,
            }))
          }
        />
      </Modal>
      <Modal
        title="Register"
        visible={register}
        onOk={okHandler}
        okText={"Register"}
        onCancel={cancelHandler}
      >
        <p>Username</p>
        <Input placeholder="Username" maxLength={10} minLength={5} />
        <p>Email address</p>
        <Input
          placeholder="Email"
          maxLength={30}
          minLength={10}
          status={emailStatus && "error"}
          onChange={(e) =>
            setPersonData((old) => ({
              ...old,
              email: e.target.value,
            }))
          }
        />
        <p>Password</p>
        <Input.Password
          placeholder="Password"
          maxLength={15}
          minLength={5}
          status={pwStatus && "error"}
          onChange={(e) =>
            setPersonData((old) => ({
              ...old,
              password: e.target.value,
            }))
          }
        />
      </Modal>
    </div>
  );
}

export default Header;
