import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-enterprise.component.html',
  styleUrls: ['./list-enterprise.component.scss']
})
export class ListEnterpriseComponent implements OnInit {

  usuarios: any[] = []
  user: any = {nome: "nobrega", email: "dddhsjs@sksks", cpf: "8338339293", cep: "94833948"}

  constructor() {
    for (let index = 0; index < 10; index++) {
      this.usuarios.push(this.user)
    }
  }

  ngOnInit(): void {

  }
}

