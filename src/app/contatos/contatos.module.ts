import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ContatoBuscaComponent } from './components/contato-busca.component';
import { ContatoDetalheComponent } from './components/contato-detalhe.component';
import { ContatosListaComponent } from './components/contatos-lista.component';
import { ContatoRoutingModule } from './routers/contato-routing.module';
import { ContatoService } from './services/contato.service';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatoBuscaComponent,
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports:[
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers: [
        ContatoService
    ]
})
export class ContatosModule {}

