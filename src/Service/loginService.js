const FASTAPI_URL = import.meta.env.VITE_FASTAPI_URL;


export const loginService = async (username, password) => {
    const response = await fetch ( `${FASTAPI_URL}/login/login_user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password})
    });

    const data = await response.json();
    
    if(!response.ok){
        throw new Error(data.message || response.statusText);
    }
    return data
}
