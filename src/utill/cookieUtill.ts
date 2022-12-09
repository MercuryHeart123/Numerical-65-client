import Cookies from 'universal-cookie'
export const getTokenFormCookie = () => {
    const cookies = new Cookies();
    const token = cookies.get('numericalToken');
    return token;
}

export const getHeaders = (token: string) => {
    let header = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return header
}
