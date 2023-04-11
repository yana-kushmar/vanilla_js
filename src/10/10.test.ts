import React from "react";
import {UserType} from "./10";

function increaseAge(u: UserType) {
    u.hair = u.hair + 1
}

test("reference type test ", () => {
    let user: UserType = {
        name:"Yana",
        hair: 123,
        address: {
            title: "New York"
        }
    }
    increaseAge(user)
    expect(user.hair).toBe(123)
})