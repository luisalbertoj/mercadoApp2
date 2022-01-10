import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/@shared/logger.service';
import { FactoryService } from '@app/@shared/services/factory.service';
import { environment } from '@env/environment';
import { QuoteService } from './quote.service';
const log = new Logger('Login');

interface Table {
  header: {};
  caption: string;
  data: any[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  tableProducts: Table;
  constructor(private quoteService: QuoteService, private _factoryService: FactoryService) {
    this.tableProducts = {
      header: { id: 'ID', title: 'Title', sold_quantity: 'Quantity', price: 'Price', edit: 'Edit' },
      caption: 'Productos',
      data: [],
    };
  }
  onEditClick = (element: any) => this.onEdit(element);

  onEdit(element: any) {
    console.log(element);
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.isLoading = true;
    this._factoryService.get(environment.mercado_libre_api + 'users/me').subscribe((res: any) => {
      console.log('User', res);
      this.getAllProducts(res);
    });
  }

  async getProduct(product: any) {
    this._factoryService.get(`${environment.mercado_libre_api}/items/${product}`).subscribe((response: any) => {
      this.tableProducts.data.push(response);
    });
  }

  getAllProducts(user: any): void {
    this._factoryService.get(`${environment.mercado_libre_api}/users/${user.id}/items/search`).subscribe((res: any) => {
      for (const product of res.results) {
        this.getProduct(product);
      }
      setTimeout(() => (this.isLoading = false), 400);
    });
  }
}
