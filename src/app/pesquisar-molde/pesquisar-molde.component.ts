import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar-molde',
  templateUrl: './pesquisar-molde.component.html',
  styleUrls: ['./pesquisar-molde.component.css']
})
export class PesquisarMoldeComponent implements OnInit {

  moldes = [{molde: 'Taça', produto: 'Taça Vinho', material: 'PS', cavidades: '2'},
  {molde: 'Eco 400', produto: 'Copo Eco', material: 'PP', cavidades: '4'},
  {molde: 'Long Drink', produto: 'Long Drink', material: 'PS', cavidades: '4'},
  {molde: 'Caneca', produto: 'Caneca 500', material: 'PS', cavidades: '2'},
  {molde: 'Balde', produto: 'Balde Eco', material: 'PP', cavidades: '1'},
  {molde: 'Tampa Tradicional', produto: 'Tampa Tradicional M', material: 'PE', cavidades: '4'},];

  constructor() { }

  ngOnInit(): void {
  }

}
