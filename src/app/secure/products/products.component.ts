import { Product } from './../../interfaces/product.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  users: Product[] =[]
  dataSource = new MatTableDataSource()
  displayedColumns: string[] = ['ID','title', 'image', 'price', 'description','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private productSerive: ProductService
  ) { }

  ngOnInit(): void {
    this.productSerive.all().subscribe({next: products => this.dataSource.data = products})
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

}
