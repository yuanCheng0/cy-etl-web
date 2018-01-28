import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NzTreeModule } from 'ng-tree-antd';
import { DndModule } from 'ng2-dnd';

import { ElementsRoutingModule } from './elements-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';
import { ModelCustomComponent } from './modal/custom.component';
import { SpinComponent } from './spin/spin.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { GridMasonryComponent } from './gridmasonry/gridmasonry.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsFontComponent } from './iconsfont/iconsfont.component';
import { ColorsComponent } from './colors/colors.component';
import { TreeAntdComponent } from './tree-antd/tree-antd.component';
import { DemoSortableComponent } from './sortable/sortable.component';
import { SweetAlertComponent } from './sweetalert/sweetalert.component';

import { TreeAntdBasicComponent } from './tree-antd/basic.component';
import { TreeAntdAsyncComponent } from './tree-antd/async.component';
import { TreeAntdDraggableComponent } from './tree-antd/draggable.component';
import { TreeAntdSearchableComponent } from './tree-antd/searchable.component';
import { TreeAntdLineComponent } from './tree-antd/line.component';

import { DependencyConfListConponent } from './dependency/dependency-conf-list.component';
import {SchedulerHistoryComponent} from "./dependency/history/scheduler-history-list.component";
import {SchedulerHistoryDetailComponent} from "./dependency/history/detail/scheduler-history-detail.component";
//import {AgGridModule} from "ag-grid-angular/main";
import { DataTablesModule } from 'angular-datatables';
const TreeAntdDemoComponentes = [
    TreeAntdBasicComponent,
    TreeAntdAsyncComponent,
    TreeAntdDraggableComponent,
    TreeAntdSearchableComponent,
    TreeAntdLineComponent
];

@NgModule({
    imports: [
        SharedModule,
        ElementsRoutingModule,
        NzTreeModule,
        DndModule.forRoot(),
        //AgGridModule.withComponents([DependencyConfListConponent])
        DataTablesModule
    ],
    declarations: [
        ButtonsComponent,
        NotificationComponent,
        ModalComponent,
        ModelCustomComponent,
        SpinComponent,
        DropdownComponent,
        GridComponent,
        GridMasonryComponent,
        TypographyComponent,
        IconsFontComponent,
        ColorsComponent,
        TreeAntdComponent,
        ...TreeAntdDemoComponentes,
        DemoSortableComponent,
        SweetAlertComponent,
        DependencyConfListConponent,

        SchedulerHistoryComponent,
        SchedulerHistoryDetailComponent
    ],
    entryComponents: [
        ModelCustomComponent,
        SchedulerHistoryComponent,
        SchedulerHistoryDetailComponent
    ]
})
export class ElementsModule { }
