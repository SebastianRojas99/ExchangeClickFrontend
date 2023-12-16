import { Rol } from '././../Enums/enum';

export interface user
{
    UserId: number;
    Name: string;
    LastName: string;
    Username: string;
    Password: string;
    Email: string;
    Role:Rol;
}