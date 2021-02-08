import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fe3cd028-48b8-4f24-aace-482e17e6fa4c"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }

}

export const followingAPI = {
    follow(id: number = 2) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(id: number = 2) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}