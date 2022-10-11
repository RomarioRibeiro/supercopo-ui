import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';


import { AppComponent } from './app.component';
import { PesquisarMoldeComponent } from './pesquisar-molde/pesquisar-molde.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CadastraMoldeComponent } from './cadastra-molde/cadastra-molde.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisarMoldeComponent,
    NavBarComponent,
    CadastraMoldeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
