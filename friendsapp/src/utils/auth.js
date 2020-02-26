class Auth{
    constructor(){
        this.authenticated = false;
    }
    
    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated(){
        return this.authenticated
    }
}
export default new Auth()