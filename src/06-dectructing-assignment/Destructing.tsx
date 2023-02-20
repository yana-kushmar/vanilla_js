import React from "react";

type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}


let props: ManType
beforeEach(() => {
     props = {
        name: "Yana",
        age: 22,
        lessons: [
            {title: "1"},
            {title: "2"},
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
    expect(lessons.length).toBe(2)

    expect(title).toBe("bali street")


})


test("", () => {


})