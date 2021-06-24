import {IUser} from "../redux/store";

export const getValue = (user: any, expArr: string[]): string | undefined => {
    if (typeof user == "object") {
        return getValue(user[expArr[0]], expArr.slice(1))
    } else {
        return user
    }
}

/**
 *
 * @param expression should be like "dob.age"
 */
export const getUsersPredicate = (expression: string) => {
    const splitted = expression.split(".")
    console.log("SPLITTED", splitted)
    if (!splitted.length) {
        return
    }


    return (a: IUser, b: IUser) => {
        console.log("--------")
        const res1 = getValue(a, splitted)
        const res2 = getValue(b, splitted)
        if (res1 && res2) {
            return res1.localeCompare(res2)
        }
        return 0
    }
}