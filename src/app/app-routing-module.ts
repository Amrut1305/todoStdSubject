import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { TodoDashComponent } from "./shared/component/todo-dash/todo-dash.component";
import { StdDashComponent } from "./shared/component/std-dash/std-dash.component";

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "",
        redirectTo: 'home',
        pathMatch: "full"
    },
    {
        path: "todos",
        component: TodoDashComponent
    },
    {
        path: "students",
        component: StdDashComponent
    },
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {

}