import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {Poll} from "./Poll";


type Props = {

};
export const Dashboard = (props: Props) => {
    return (
        <div>
            Dashboard page
            <NavLink to={"/poll"} >go back</NavLink>
        </div>
    );
};