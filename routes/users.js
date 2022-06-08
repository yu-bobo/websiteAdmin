const { registCtr, loginCtr, getAllUsersCtr, deleteUsersCtr, updateUsersCtr } = require("../controller/usersController");
const usersRouterArray = [
    {
        reqType: 'post',
        path: '/users/regist',
        controller: registCtr
    },
    {
        reqType: 'post',
        path: '/users/login',
        controller: loginCtr
    },
    {
        reqType: 'get',
        path: '/users/getAllUsers',
        controller: getAllUsersCtr
    },
    {
        reqType: 'post',
        path: '/users/deleteUsers',
        controller: deleteUsersCtr
    },
    {
        reqType: 'post',
        path: '/users/updateUsers',
        controller: updateUsersCtr
    },
]

module.exports = usersRouterArray;
