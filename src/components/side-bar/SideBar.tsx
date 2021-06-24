// @flow
import * as React from "react";
import { TextField } from "@material-ui/core";
import "./SideBar.css";
import { FC, SyntheticEvent, useEffect } from "react";
type Props = {
  findUsersByName: Function;
  nameToSearch?: string;
};
export const SideBar = (props: Props) => {
  const { findUsersByName, nameToSearch } = props;

  useEffect(() => {
    if (nameToSearch) {
      findUsersByName(nameToSearch);
    }
  }, [nameToSearch]);

  const onTextChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    findUsersByName(event.target.value);
  };
  return (
    <div className={"side-bar__container"} style={{ textAlign: "center" }}>
      <TextField
        label="Search Users by name"
        variant="standard"
        onChange={onTextChangeHandler}
      />
    </div>
  );
};
