import axios from 'axios'
import React, { useEffect } from 'react'
import { getHeaders, getTokenFormCookie } from '../../../utill/cookieUtill'

const Admin = () => {
    useEffect(() => {
        const token = getTokenFormCookie();

        if (token) {
            axios.get('http://localhost:8081/api/admin', getHeaders(token)
            ).then((res) => {
                console.log(res.data.data);
            }).catch((err) => {
                console.log(err.response.data)
            })
        }
    }, [])


    return (
        <div>Admin</div>
    )
}

export default Admin