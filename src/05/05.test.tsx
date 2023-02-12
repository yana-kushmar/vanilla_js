import React from "react";
import {ManType} from "./05";


let people: ManType[]


beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ]
})

test('should get array of getting message', () => {


    const messages = people.map(man => `hello ${man.name.split(" ")[0]}. Welcome to It-Incubator`)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("hello Andrew. Welcome to It-Incubator")
    expect(messages[1]).toBe("hello Alexander. Welcome to It-Incubator")
    expect(messages[2]).toBe("hello Dmitry. Welcome to It-Incubator")

})