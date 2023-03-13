import React from "react";

type userType = {
    name: string
    age: number
    address: {
        title: string
    }
}
const increaseAge = (u: userType) => {
    u.age++

}
test("big reference type test", () => {

    let user: userType = {
        name: "Yana",
        age: 22,
        address: {
            title: "Minsk",
        },
    }


    increaseAge(user)
    expect(user.age).toBe(23)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)

})


test(" array  test", () => {

    let users = [{
        name: "Yana",
        age: 22
    },
        {
            name: "Igor",
            age: 23
        },
    ]
    const admins = users

    admins.push({name: "Bandugan", age: 10})


    expect(users[2]).toEqual({name: "Bandugan", age: 10})

})


// test("value type  test", () => {
//
//     let usersCount = 100;
//
//     let adminsCount = usersCount
//
//     adminsCount++
//
//     expect(users[2]).toEqual({name: "Bandugan", age: 10})
//
// })


test("reference type test", () => {

    let user: userType = {
        name: "Yana",
        age: 22,
        address: {
            title: "Minsk",
        },
    }


    let addr = user.address
    let user2: userType = {
        name: "Natasha",
        age: 21,
        address: user.address
    }
    user2.address.title = "Kanary"

    expect(user.address.title).toBe("Kanary")
    expect(user.address).toBe(user2.address)

})

test("reference type test array", () => {

    const address = {
        title: "Minsk"
    }

    let user: userType = {
        name: "Yana",
        age: 22,
        address: {
            title: "Minsk",
        },
    }

    let user2: userType = {
        name: "Natasha",
        age: 21,
        address: user.address
    }

    const users = [user, user2, {name: "Misha", age: 11, address: address}]

    const admins = [user, user2]

    admins[0].name = "Igor"


    expect(users[0].name).toBe("Igor")
    expect(user.name).toBe("Igor")

})

test("sort array test", () => {

    const letters = ["c", "d", "a", "z", "e"]

    passportist(letters)

    expect(letters).toEqual(["a", "c", "d", "e", "z"])
})

const passportist = (letters: any) => {
   const copy = [...letters].sort()
    console.log(letters)

}

