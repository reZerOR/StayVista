import axiosSecure from "."
// sava user data to database
export const saveUser = async user => {
    const currentUser ={ 
        email: user.email,
        role: 'guest',
        status: 'Verified'
    }
    const {data} = await axiosSecure.put(`/users/:${user?.email}`, currentUser)
    return data
}

// get jwt token
export const getToken = async email => {
     const {data} = await axiosSecure.post(`/jwt`, email)
     console.log('token recived: ', data)
    return data
}