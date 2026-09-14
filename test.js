const originalUser = {
    name: "Artem",
    age: 16,
    phoneNumber: 12312313123
}

const user2 = {
    ...originalUser,
    name: "Kirill"
}

console.log(originalUser, user2)