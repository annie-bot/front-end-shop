import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

    private baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) {
    }

  create(enterprise: any) {
    return this.http.post(`${this.baseUrl}/learningpath/`, enterprise)
  }

  getAllEnterprises() {
    return this.http.get(`${this.baseUrl}/enterprise/`);
  }

  getEnterpriseById(id) {
    return this.http.get(`${this.baseUrl}/enterprise/${id}`);
  }

  updateEnterprise(id: number, learningPath: any) {
    return this.http.put(`${this.baseUrl}/enterprise/${id}`, learningPath);
  }

  deleteById(id){
    return this.http.delete(`${this.baseUrl}/enterprise/${id}`)
  }
}
