// @flow
import * as React from "react";
import { IUser } from "../../redux/store";
import { TableCell, TableRow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {
  sortUsersByAge,
  sortUsersByCity,
  sortUsersByEmail,
  sortUsersByName,
} from "../../redux/actions/usersActions";

type Props = {
  user: IUser;
};
export const TablesHeaders = () => {
  const dispatch = useDispatch();

  const onEmailClick = () => {
    dispatch(sortUsersByEmail());
  };
  const onNameClick = () => {
    dispatch(sortUsersByName());
  };
  const onCityClick = () => {
    dispatch(sortUsersByCity());
  };
  const onAgeClick = () => {
    dispatch(sortUsersByAge());
  };
  return (
    <>
      {/*<TableCell>ID</TableCell>*/}
      {/*<TableCell>Title</TableCell>*/}
      {/*<TableCell>First Name</TableCell>*/}
      {/*<TableCell>Last Name</TableCell>*/}
      {/*<TableCell>Street Name</TableCell>*/}
      {/*<TableCell>Street Number</TableCell>*/}
      {/*<TableCell>City</TableCell>*/}
      {/*<TableCell>State</TableCell>*/}
      {/*<TableCell>Country</TableCell>*/}
      {/*<TableCell>PostCode</TableCell>*/}
      {/*<TableCell>Latitude</TableCell>*/}
      {/*<TableCell>Longitude</TableCell>*/}
      {/*<TableCell>Timezone Offset</TableCell>*/}
      {/*<TableCell>Timezone description</TableCell>*/}
      {/*<TableCell>Email</TableCell>*/}
      {/*<TableCell>Login Username</TableCell>*/}
      {/*<TableCell>Login Password</TableCell>*/}
      {/*<TableCell>Login salt</TableCell>*/}
      {/*<TableCell>Login md5</TableCell>*/}
      {/*<TableCell>Login sha1</TableCell>*/}
      {/*<TableCell>Login sha256</TableCell>*/}
      {/*<TableCell>Dob age</TableCell>*/}
      {/*<TableCell>Registered date</TableCell>*/}
      {/*<TableCell>Registered age</TableCell>*/}
      {/*<TableCell>Phone</TableCell>*/}
      {/*<TableCell>Cell</TableCell>*/}
      {/*<TableCell>ID value</TableCell>*/}
      {/*<TableCell>Login Name</TableCell>*/}
      {/*<TableCell>Picture Large</TableCell>*/}
      {/*<TableCell>Picture Medium</TableCell>*/}
      {/*<TableCell>Picture Thumbnail</TableCell>*/}
      {/*<TableCell>Nat</TableCell>*/}

      <TableRow>
        <TableCell onClick={onNameClick}>Full Name</TableCell>
        <TableCell onClick={onEmailClick}>Email</TableCell>
        <TableCell onClick={onCityClick}>City</TableCell>
        <TableCell onClick={onAgeClick}>Age</TableCell>
        <TableCell>Gender</TableCell>
      </TableRow>
    </>
  );
};
