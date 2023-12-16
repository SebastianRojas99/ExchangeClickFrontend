export interface RegisterData extends User {
    Password: string,
}

export interface User{
    UserName: string,
    FirstName: string,
    LastName: string,
}

export interface LoginData {
    UserName: string,
    Password: string
}