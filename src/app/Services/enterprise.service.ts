import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

    private baseUrl = 'localhost:8080';

    constructor(private http: HttpClient) {
    }

  create(enterprise: any) {
    return this.http.post(`${this.baseUrl}/enterprises`, enterprise)
  }

  getAllEnterprises() {
    return this.http.get(`${this.baseUrl}/enterprises`);
  }

  getEnterpriseById(id: any) {
    return this.http.get(`${this.baseUrl}/enterprises/${id}`);
  }

  updateEnterprise(id: any, learningPath: any) {
    return this.http.put(`${this.baseUrl}/enterprises/${id}`, learningPath);
  }

  deleteById(id: any){
    return this.http.delete(`${this.baseUrl}/enterprises/${id}`)
  }
}
