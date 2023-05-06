import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  create(supplier: any) {
    return this.http.post(`${this.baseUrl}/supplier/`, supplier)
  }

  getAllSupplier() {
    return this.http.get(`${this.baseUrl}/supplier/`);
  }

  getEnterpriseById(id) {
    return this.http.get(`${this.baseUrl}/supplier/${id}`);
  }

  updateEnterprise(id: number, supplier: any) {
    return this.http.put(`${this.baseUrl}/supplier/${id}`, supplier);
  }

  deleteById(id){
    return this.http.delete(`${this.baseUrl}/supplier/${id}`)
  }
}
