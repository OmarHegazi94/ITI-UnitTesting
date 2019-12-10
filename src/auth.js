function authintication(userName, password) {
    if(typeof userName === 'string' && typeof password === 'string') {
        if (userName.length <= 9 && password.length <= 9) {
            return true;
        }
        else {
            // return "Not A valid Length for User Name and Password";
            return false;
        }
    }
    else {
        // return "Not a valid UserName and Password Types";
        return false;
    }
}

// alert(authintication("Omar","njfnef"));
