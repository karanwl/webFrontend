import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { User } from "./user.model";


@Injectable()
export class UserRepository
{
    private users!: User[];

    constructor(private dataSource: RestDataSource){}

    getUsers(): User[]
    {
        return this.users;
    }

    saveUser(user: User): Observable<any>
    {
        return this.dataSource.saveUser(user);
    }

}