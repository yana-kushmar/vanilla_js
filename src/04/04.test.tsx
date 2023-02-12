import React from "react";
import {CourseType} from "./04";


test('should take old man older than 90 ', () => {
    const ages = [10, 20, 22, 1, 100, 99, 14]

    const oldAges = ages.filter(age =>  age > 90);

    expect(oldAges.length).toBe(2 )
    expect(oldAges[0]).toBe(100)
})


test('should take courses cheaper than 160 ', () => {
    const courses =[
        {title: "css", price: 110},
        {title: "Js", price: 200},
        {title: "React", price: 150}
        ]


    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("css")
    expect(chipCourses[1].title).toBe("React")
})


test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title:'bread', isDone: false},
        {id: 2, title:'milk', isDone: true},
        {id: 3, title:'solt', isDone: false},
        {id: 4, title:'sugar', isDone: true},
    ]
    const completedTasks = tasks.filter(tasks => tasks.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})


test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title:'bread', isDone: false},
        {id: 2, title:'milk', isDone: true},
        {id: 3, title:'solt', isDone: false},
        {id: 4, title:'sugar', isDone: true},
    ]
    const uncompletedTasks = tasks.filter(tasks => tasks.isDone === false)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})
