export interface RegisterData extends User {
    Password: string,
}

export interface User{
    Username: string,
    Name: string,
    LastName: string,
}

export interface LoginData {
    Username: string,
    Password: string
}