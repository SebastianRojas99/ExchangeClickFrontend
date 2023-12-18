export interface RegisterData extends User {
    Password: string,
}

export interface User{
    Email:string,
    Username: string,
    Name: string,
    LastName: string,
}

export interface LoginData {
    Email: string,
    Password: string
}