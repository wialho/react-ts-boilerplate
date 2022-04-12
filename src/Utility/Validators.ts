export function IsPhoneValid(phoneNumber: string): boolean {
    return (phoneNumber.length === 7 || phoneNumber.length === 10) 
        &&  !!phoneNumber.match("[0-9]+");
}

export function IsEmailValid(email: string): boolean {
    return email.includes("@");
}

//for a good regex 
//https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
export function IsPasswordValid(password: string): boolean {
    return password.length >= 8 
        && !!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
}