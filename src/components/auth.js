import apiNova from "../services/apiNova"


    const isAuthenticated = () => {
        const token = localStorage.getItem("authenticated");
        if(token){
            return true;
        }else{
            return false;
        }
    }


    const signin = async (email, password) => {
        
        const options = {
            headers: { 'content-type': 'application/json' },
        };
        const res = await apiNova.post('/users/userAuth', {
            "email": email,
            "password": password
        }, options);
        let token = null;
        if(res && res.data.token){
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user);
            token = localStorage.getItem("token");
        }
        

        if(token){
            return {
                "token": token,
                "user": res.data.user,
                "authenticated": true
            };
        }else{
            return {
                "authenticated": false
            };
        }
    };

    const logout = () => {
        localStorage.setItem("token", null);
        return "Logout realizado!";
    }
    
    export { signin, isAuthenticated, logout };