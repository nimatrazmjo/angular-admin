import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForms!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {

   }

  ngOnInit(): void {
    this.productForms = this.formBuilder.group({
      title: '',
      image: '',
      price: 0,
      description: ''
    });
  }

  submit(): void {
    this.productService.createProduct(this.productForms.getRawValue())
      .subscribe({next: product => console.log(product)})
  }
}
