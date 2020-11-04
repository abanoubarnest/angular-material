import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'app/layouts';
import { CommonLayoutComponent } from 'app/layouts/common-layout';
import { TablesComponent } from './tables';
import { ThreeTableComponent } from './three-table/three-table.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          { path: 'table', component: TablesComponent, pathMatch: 'full' },
          { path: 'tables', component: ThreeTableComponent, pathMatch: 'full' },

        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class UIRoutingModule { }
