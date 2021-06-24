// @flow
import * as React from 'react';
import {IUser} from "../../redux/store";
import TableRow from "@material-ui/core/TableRow";
import {TableCell} from "@material-ui/core";

type Props = {
  users : IUser[]
};
export const TableData2 = (props: Props) => {
    const users : IUser[] = props.users
    return (
       <>
           {users.map(user=>{
               return <TableRow key={user.login.uuid}>
                   {/*<TableCell>{user.login.uuid}</TableCell>*/}
                   {/*<TableCell>{user.name?.title}</TableCell>*/}
                   {/*<TableCell>{user.name?.first}</TableCell>*/}
                   {/*<TableCell>{user.name?.last}</TableCell>*/}
                   {/*<TableCell>{user.location.street.name}</TableCell>*/}
                   {/*<TableCell>{user.location.street.number}</TableCell>*/}
                   {/*<TableCell>{user.location.city}</TableCell>*/}
                   {/*<TableCell>{user.location.state}</TableCell>*/}
                   {/*<TableCell>{user.location.contry}</TableCell>*/}
                   {/*<TableCell>{user.location.postcode}</TableCell>*/}
                   {/*<TableCell>{user.location.coordinates.latitude}</TableCell>*/}
                   {/*<TableCell>{user.location.coordinates.longitude}</TableCell>*/}
                   {/*<TableCell>{user.location.timezone.offset}</TableCell>*/}
                   {/*<TableCell>{user.location.timezone.description}</TableCell>*/}
                   {/*<TableCell>{user.email}</TableCell>*/}
                   {/*<TableCell>{user.login.username}</TableCell>*/}
                   {/*<TableCell>{user.login.password}</TableCell>*/}
                   {/*<TableCell>{user.login.salt}</TableCell>*/}
                   {/*<TableCell>{user.login.md5}</TableCell>*/}
                   {/*<TableCell>{user.login.sha1}</TableCell>*/}
                   {/*<TableCell>{user.login.sha256}</TableCell>*/}
                   {/*<TableCell>{user.dob.age}</TableCell>*/}
                   {/*<TableCell>{user.dob.date}</TableCell>*/}
                   {/*<TableCell>{user.registered.date}</TableCell>*/}
                   {/*<TableCell>{user.registered.age}</TableCell>*/}
                   {/*<TableCell>{user.phone}</TableCell>*/}
                   {/*<TableCell>{user.id.name}</TableCell>*/}
                   {/*<TableCell>{user.id.value}</TableCell>*/}
                   {/*<TableCell>{user.picture.large}</TableCell>*/}
                   {/*<TableCell>{user.picture.medium}</TableCell>*/}
                   {/*<TableCell>{user.picture.thumbnail}</TableCell>*/}
                   {/*<TableCell>{user.nat}</TableCell>*/}
                   <TableCell>{user.name?.first} {user.name?.last}</TableCell>
                   <TableCell>{user.email}</TableCell>
                   <TableCell>{user.location.city}</TableCell>
                   <TableCell>{user.dob.age}</TableCell>
                   <TableCell>{user.gender}</TableCell>

               </TableRow>
           })}
       </>
    );
};



