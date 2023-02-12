import {StudentType} from "../02/02";
import {addSlkill, doesStudentLivesInCity, makesStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        name: "Yana",
        age: 22,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
    }
})


test(" new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)
    addSlkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test(" student should be active", () => {
    expect(student.isActive).toBe(false)
    makesStudentActive(student)
    expect(student.isActive).toBe(true)

})

test(" student lives in city", () => {
    let result1 = doesStudentLivesInCity(student, "Istanbul");
    let result2 = doesStudentLivesInCity(student, "Minsk");

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})