import React from "react";
import {student, StudentType} from "../02/02";


export const addSlkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

// export const addSlkill2 = (st: StudentType, skill: string) => {
//     st.technologies.push({
//         id: new Date().getTime(),
//         title: skill
//     })
// }

export function makesStudentActive(s: StudentType) {
    s.isActive = true;

}

export const doesStudentLivesInCity = (c: StudentType, cityName: string) => {
 return c.address.city.title === cityName
}



