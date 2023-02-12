import React from "react";

const ages = [10, 20, 22, 1, 100, 99, 14]

const predicate = (age: number) => {
    return age > 90;
}


const oldAges = [100] // more 90


 export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "css", price: 110},
    {title: "Js", price: 200},
    {title: "React", price: 150}
]
const chipPredicate = (course: CourseType) => {
    return course.price < 160
}

const chipCourse = [
    {title: "css", price: 110},
    {title: "React", price: 150}
]
