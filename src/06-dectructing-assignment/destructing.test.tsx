import React from "react";
import {ManType} from "./Destructing";


let props: ManType
beforeEach(() => {
    props = {
        name: "Yana",
        age: 22,
        lessons: [
            {title: "1"},
            {title: "2"},
            {title: "3"},
        ],
        address: {
            street: {
                title: "bali street"
            }
        }
    }

})

test("", () => {

    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(22)
    expect(lessons.length).toBe(3)

    expect(title).toBe("bali street")


})


test('destructing array', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]


    const [,ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    // expect(ls1.title).toBe("1")
    // expect(ls2.title).toBe("2")
    expect(ls2.title).toBe('2')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")

})