import { Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UpgradableComponent } from 'theme/components/upgradable';
import { ConfirmMessageComponent } from '../confirm-messagge/confirm-messagge.component';
import { InfoTableComponent } from '../info-table/info-table.component';
import { TablesService } from '../tables/tables.service';
import { ViewOnlyComponent } from '../view-only/view-only.component';


@Component({
  selector: 'app-tables',
  templateUrl: './three-table.component.html',
  styleUrls: ['./three-table.component.scss'],
})
export class ThreeTableComponent extends UpgradableComponent {
  public readonly Array = Array;

  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') public readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') public readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') public readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') public readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') public readonly mdlCellTop = true;
  @HostBinding('class.ui-tables') public readonly uiTables = true;

  public constructor(public tablesService: TablesService, private dialog: MatDialog) {
    super();
  }

  public readonly sortOrder = {
    asc: 1,
    desc: -1,
  };
  public readonly sortOrder2 = {
    asc: 1,
    desc: -1,
  };
  public readonly sortOrder3 = {
    asc: 1,
    desc: -1,
  };
  public advancedHeaders = this.tablesService.getAdvancedHeaders();
  public advancedHeaders2 = this.tablesService.getAdvancedHeaders2();
  public advancedHeaders3 = this.tablesService.getAdvancedHeaders3();


  public currentPage = 1;
  public countPerPage = 4;
  public currentPage2= 1;
  public countPerPage2 = 4;
  public currentPage3= 1;
  public countPerPage3 = 4;
  public numPage = this.tablesService.getAdvancedTableNumOfPage(this.countPerPage);
  public numPage2 = this.tablesService.getAdvancedTableNumOfPage2(this.countPerPage);
  public numPage3 = this.tablesService.getAdvancedTableNumOfPage3(this.countPerPage);


  public advancedTable = this.tablesService.getAdvancedTablePage(1, this.countPerPage);
  public advancedTable2 = this.tablesService.getAdvancedTablePage2(1, this.countPerPage);
  public advancedTable3 = this.tablesService.getAdvancedTablePage3(1, this.countPerPage);



  public changePage(page, force = false) {
    if (page !== this.currentPage || force) {
      this.currentPage = page;
      this.advancedTable = this.tablesService.getAdvancedTablePage(page, this.countPerPage);
    }
  }
  public changePage2(page, force = false) {
    if (page !== this.currentPage2 || force) {
      this.currentPage2 = page;
      this.advancedTable2 = this.tablesService.getAdvancedTablePage2(page, this.countPerPage2);
    }
  }
  public changePage3(page, force = false) {
    if (page !== this.currentPage3 || force) {
      this.currentPage3 = page;
      this.advancedTable3 = this.tablesService.getAdvancedTablePage3(page, this.countPerPage3);
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
  public changeSorting2(header, index) {
    const current = header.sort;
    const prop = header.prop;
    if (current !== null) {
      this.advancedHeaders2.forEach((cell) => {
        cell.sort = (cell.sort !== null) ? 0 : null;
      });
      header.sort = (current === 1) ? -1 : 1;
      this.tablesService.changeAdvanceSorting2(header.sort, index, prop);
      this.changePage2(1, true);
    }
  }
  public changeSorting3(header, index) {
    const current = header.sort;
    const prop = header.prop;
    if (current !== null) {
      this.advancedHeaders3.forEach((cell) => {
        cell.sort = (cell.sort !== null) ? 0 : null;
      });
      header.sort = (current === 1) ? -1 : 1;
      this.tablesService.changeAdvanceSorting3(header.sort, index, prop);
      this.changePage3(1, true);
    }
  }

  openDialagAddOrEdit(item?) {
    const dialogRef = this.dialog.open(InfoTableComponent, {
      width: "50%",
      // height: "60%",
      data: {
        item: item ? JSON.parse(JSON.stringify(item)) : null,
        check: true
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
  openDialagAddOrEdit2(item?) {
    const dialogRef = this.dialog.open(InfoTableComponent, {
      width: "50%",
      // height: "60%",
      data: {
        item: item ? JSON.parse(JSON.stringify(item)) : null,
        check: true
      }
    });

    dialogRef.afterClosed().subscribe(el => {
      if (el) {
        if (item) {
          let index = this.tablesService.data2.findIndex((row) => {
            return row.id == el.id;

          });
          this.tablesService.data2[index] = el;
          this.advancedTable2 = this.tablesService.getAdvancedTablePage2(this.currentPage2, this.countPerPage2);

          // item = el;
        }
        else {
          this.tablesService.data2.push(el);
          this.advancedTable2 = this.tablesService.getAdvancedTablePage2(this.currentPage2, this.countPerPage2);
        }



      }

    });
  }
  openDialagAddOrEdit3(item?) {
    const dialogRef = this.dialog.open(InfoTableComponent, {
      width: "50%",
      // height: "60%",
      data: {
        item: item ? JSON.parse(JSON.stringify(item)) : null,
        check: true
      }
    });

    dialogRef.afterClosed().subscribe(el => {
      if (el) {
        if (item) {
          let index = this.tablesService.data3.findIndex((row) => {
            return row.id == el.id;

          });
          this.tablesService.data3[index] = el;
          this.advancedTable3 = this.tablesService.getAdvancedTablePage3(this.currentPage3, this.countPerPage3);

          // item = el;
        }
        else {
          this.tablesService.data3.push(el);
          this.advancedTable3 = this.tablesService.getAdvancedTablePage3(this.currentPage3, this.countPerPage3);
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
  openDialagDelete2(item?) {
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
        this.tablesService.data2 = this.tablesService.data2.filter(el => el.id != item.id);
        this.advancedTable2 = this.tablesService.getAdvancedTablePage2(this.currentPage2, this.countPerPage2);



      }
    });
  }
  openDialagDelete3(item?) {
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
        this.tablesService.data3 = this.tablesService.data3.filter(el => el.id != item.id);
        this.advancedTable3 = this.tablesService.getAdvancedTablePage3(this.currentPage3, this.countPerPage3);



      }
    });
  }
}
