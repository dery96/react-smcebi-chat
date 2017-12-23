import axios from 'axios';

export userService = {
    login,
    test
}

const login = () => {
    const request = axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
    })

    .catch(function (error) {
        console.log(error);
    });

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: ''})
        });
    };
}

const test = () {
    const request = axios.get('http://jsonplaceholder.typicode.com/users')

    return (dispatch) => {
        request.then()
    }


}
