let users = ["test", "test2"]
let countUsers = 0;

function deleteUser(name) {
    for (let i=0; i < users.length; i++) {
        if (users[i] === name) {
            users.splice(i, 1);
            break;
        }
    }
}

function findUser(name){
    for (let key in users){
        let result = (users[key] === name) ? true : false;
        return result
    }
}

export { users, countUsers, deleteUser, findUser}