import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { TablesRoutingModule } from './tables-routing.module';

import { RandomUserService } from './randomUser.service';
import { TableFullComponent } from './full/full.component';
import { DemoSimpleTableComponent } from './simple-table/simple-table.component';
import { FSTableComponent } from './fs-table/fs-table.component';

import { TableStandardComponent } from './standard/standard.component';
import {ExtrasPoiEditComponent} from "./simple-table/edit/edit.component";
import { DictDetailEditComponent } from "./simple-table/detail/editDetail.component";
import {DataTablesModule} from "angular-datatables/index";


const COMPONENTS_NOROUNT = [ ExtrasPoiEditComponent,DictDetailEditComponent ];
@NgModule({
    imports: [ SharedModule, TablesRoutingModule,DataTablesModule ],
    providers: [ RandomUserService ],
    declarations: [
        TableStandardComponent,
        TableFullComponent,
        DemoSimpleTableComponent,
        FSTableComponent,
        ExtrasPoiEditComponent,
        DictDetailEditComponent,
        ...COMPONENTS_NOROUNT
    ],
    entryComponents: COMPONENTS_NOROUNT
})
export class TablesModule { }
