import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import * as elementRegistryModule from "nativescript-angular/element-registry";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

@NgModule({
    imports: [
        NativeScriptModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
