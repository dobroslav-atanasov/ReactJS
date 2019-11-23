import axios from 'axios';

const userService = {
    register: function (data) {
        const { username, password } = data;
        return axios.post('http://localhost:9999/api/user/register', {
            username,
            password
        }).then(res => {
            console.log(res.data);
        });
    }
}

export default userService;