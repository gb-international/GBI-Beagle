export default authHeader(){
    let token = JSON.parse(localStorage.get('token'));
    if(token){
        return { 'Authorization' : 'Bearer ' + token};
    }else{
        return {};
    }
}