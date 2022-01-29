import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource()
  displayedColumns: string[] = ['code', 'count', 'revenue','action'];
  userId!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute
  ) {

   }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
      this.linkService.getUserLinks(this.userId)
      .subscribe({
        next: links => {
          this.dataSource.data = links;
      }});
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  sum(orders: any[]): number {
    return orders.reduce((sum,order)=>sum+order.total,0);
  }
}
