// @flow 
import * as React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TablesHeaders} from "./TablesHeaders";
import TableBody from "@material-ui/core/TableBody";
import {TableData2} from "./TableData2";
import {IUser} from "../../redux/store";

type Props = {
    users : IUser[]
};
export const TableGrid = (props: Props) => {
    const users : IUser[] = props.users
    return (
        <TableContainer component={Paper}>
            <Table className={"classes.table"} aria-label="simple table">
                <TableHead>
                    <TablesHeaders/>
                </TableHead>
                <TableBody>
                    <TableData2 users={users}/>
                </TableBody>
            </Table>
        </TableContainer>
    );
};