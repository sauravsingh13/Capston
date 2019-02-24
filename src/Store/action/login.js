import react from 'react';
import axios from 'axios';

export const loginUser = (user) => {
    return {
      type: 'LOGIN_USER',
      payload: user
    }
};

export const loginAdmin = (admin) => {
    return {
      type: 'LOGIN_ADMIN',
      payload: admin
    }
};
//Find User when login
export const findUser = (credential) => {
    return (dispatch) => {
        return axios.get("/login/users", {
                params: credential
            }
        )
        .then(response => {
            dispatch(loginUser(response.data));
        })
        .catch(error => {
            throw(error);
        });
    }
}

//Find Admin when login 
export const findAdmin = (credential) => {
    return (dispatch) => {
        return axios.get("/login/admin", {
                params: credential
            }
        )
        .then(response => {
            dispatch(loginAdmin(response.data));
        })
        .catch(error => {
            throw(error);
        });
    }
}