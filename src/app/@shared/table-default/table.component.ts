import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Logger } from '@app/@shared/logger.service';

const log = new Logger('Login');

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input() tableData: any[] = [];
  @Input() columnHeader: any;
  @Input() tableCaption: string = '';
  @Input() tableSizeOptions: any[] = [5, 10, 25, 100];
  @Input() source: any;
  @Input() editButton: any;
  objectKeys = Object.keys;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor() {
    this.dataSource = new MatTableDataSource(this.tableData);
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tableData);
      this.dataSource.sort = this.sort;
    }, 2000);
  }
  onEdit(element: any) {
    this.editButton(element);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
