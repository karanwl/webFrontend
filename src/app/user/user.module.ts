import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { AuthComponent } from "../admin/auth/auth.component";
import { AuthGuard } from "../admin/auth/auth.guard";


const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: UserComponent, canActivate: [AuthGuard],
        children: [
        {path: '**', redirectTo: 'surveys'}]
    },
    { path: '**', redirectTo: 'auth' },
]);

@NgModule
({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, UserComponent]
})
export class AdminModule {}