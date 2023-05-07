import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import {EnterpriseService} from "../../Services/enterprise.service";
import { FormsModule } from '@angular/forms';
import {flatMap} from "rxjs";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-enterprise.component.html',
  styleUrls: ['./list-enterprise.component.scss']
})
export class ListEnterpriseComponent implements OnInit {

  enterprises: any[] = [];
  isAdd: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  addEnterprise(name: any, cnpj: any, email: any, cep: any) {
    let id = this.enterprises.length + 1;
    let enterprise = {id: id, name: name, email: email, cep: cep}
    this.enterprises.push(enterprise);
    console.log(this.enterprises.values())
    this.isAdd = false;
  }

  removeEnterprise() {

  }

  editEnterprise() {

  }

  add() {
    return this.isAdd = true;
  }

}

