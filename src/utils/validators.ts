export const validateLoginForm = ({ mail, password }: { mail: string; password: string }) => {
    const isMailValid = validateEmail(mail);
    const isPasswordValid = validatePassword(password);
    
    return isMailValid && isPasswordValid ;
};

export const validateRegisterForm = ({ userName, mail, password }: { userName: string; mail: string; password: string }) => {
    // const isUserNameValid = validateUserName(userName);
    const isMailValid = validateEmail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
    // return isUserNameValid && isMailValid && isPasswordValid;
}

// const validateUserName = (userName: string) => {
//     const userNameRegex = /^[a-zA-Z0-9]{3,12}$/;
//     return userNameRegex.test(userName);
// };

const validateEmail = (mail: string) => {
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return mailRegex.test(mail);
};

const validatePassword = (password: string) => {
    const passwordRegex = /^.{6,12}$/;
    return passwordRegex.test(password);
};

