import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UpgradableComponent } from 'theme/components/upgradable';
import { ConfirmMessageComponent } from '../confirm-messagge/confirm-messagge.component';
import { InfoTableComponent } from '../info-table/info-table.component';
import { ViewOnlyComponent } from '../view-only/view-only.component';
import { TablesService } from './tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent extends UpgradableComponent implements OnInit {
  public readonly Array = Array;

  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') public readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') public readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') public readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') public readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') public readonly mdlCellTop = true;
  @HostBinding('class.ui-tables') public readonly uiTables = true;
  @HostBinding('class.charts') public readonly charts = true;
  public constructor(public tablesService: TablesService, private dialog: MatDialog) {
    super();
  }


  public readonly sortOrder = {
    asc: 1,
    desc: -1,
  };

  public advancedHeaders = this.tablesService.getAdvancedHeaders();
  public currentPage = 1;
  public countPerPage = 4;
  public numPage = this.tablesService.getAdvancedTableNumOfPage(this.countPerPage);

  public advancedTable = this.tablesService.getAdvancedTablePage(1, this.countPerPage);

  public changePage(page, force = false) {
    if (page !== this.currentPage || force) {
      this.currentPage = page;
      this.advancedTable = this.tablesService.getAdvancedTablePage(page, this.countPerPage);
    }
  }
  ngOnInit(): void {

  }

  /* available sort value:
  -1 - desc; 	0 - no sorting; 1 - asc; null - disabled */
  public changeSorting(header, index) {
    const current = header.sort;
    const prop = header.prop;
    if (current !== null) {
      this.advancedHeaders.forEach((cell) => {
        cell.sort = (cell.sort !== null) ? 0 : null;
      });
      header.sort = (current === 1) ? -1 : 1;
      this.tablesService.changeAdvanceSorting(header.sort, index, prop);
      this.changePage(1, true);
    }
  }
  openDialagAddOrEdit(item?) {
    const dialogRef = this.dialog.open(InfoTableComponent, {
      width: "50%",
      // height: "60%",
      data: {
        item: item ? JSON.parse(JSON.stringify(item)) : null,
      }
    });

    dialogRef.afterClosed().subscribe(el => {
      if (el) {
        if (item) {
          let index = this.tablesService.data.findIndex((row) => {
            return row.id == el.id;

          });
          this.tablesService.data[index] = el;
          this.advancedTable = this.tablesService.getAdvancedTablePage(this.currentPage, this.countPerPage);

          // item = el;
        }
        else {
          this.tablesService.data.push(el);
          this.advancedTable = this.tablesService.getAdvancedTablePage(this.currentPage, this.countPerPage);
        }



      }

    });
  }
  openDialagView(item?) {
    const dialogRef = this.dialog.open(ViewOnlyComponent, {
      width: "50%",
      // height: "60%",
      data: {
        item: item ? JSON.parse(JSON.stringify(item)) : null,
      }
    });
  }
  openDialagDelete(item?) {
    const dialogRef = this.dialog.open(ConfirmMessageComponent, {
      width: "35%",
      data: {
        title: "Delete",
        message: "Are you sure you want to delete this Item?",
        yesTitle: "Delete",
        noTitle: "Cancel",
        color: "warn",
        // path: "assets/icons/ICONS-ALERTS/info.svg"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tablesService.data = this.tablesService.data.filter(el => el.id != item.id);
        this.advancedTable = this.tablesService.getAdvancedTablePage(this.currentPage, this.countPerPage);



      }
    });
  }
}
