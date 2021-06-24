import * as React from "react";
import { IUser, RootStore } from "./store";
import { useSelector } from "react-redux";
import { Grid, TextField } from "@material-ui/core";
import { TableGrid } from "../components/table/TableGrid";
import { SideBar } from "../components/side-bar/SideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  name: string;
}

export const Dashboard = () => {
  const users = useSelector((state: RootStore) => state.users.people);
  const params = useParams<RouteParams>();
  const [allUsers, setAllUsers] = useState<IUser[]>();

  const findUsersByName = (name: string) => {
    console.log(users, "users");
    const res: IUser[] = users.filter((user) =>
      user?.name?.first.includes(name)
    );
    setAllUsers(res);
  };

  return (
    <>
      {users?.length ? (
        <Grid container>
          <Grid item lg={2}>
            <SideBar
              findUsersByName={findUsersByName}
              nameToSearch={params.name}
            />
          </Grid>
          <Grid item lg={10}>
            {<TableGrid users={allUsers || users} />}
          </Grid>
        </Grid>
      ) : (
        "loading..."
      )}
    </>
  );
};
