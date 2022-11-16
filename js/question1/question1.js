function createUser(firstName, lastName, age, isAdmin = false) {
    return {
        school: "Noroff",
        firstName,
        lastName,
        age,
        isAdmin,
    };
}
const newUser = createUser("Ola", "Nordmann", 18);
const newAdmin = createUser("Kari", "Nordmann", 36, true);
console.log(newUser);
console.log(newAdmin);
