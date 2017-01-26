import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports:[
        ContatosListaComponent
    ],
    providers: [
        ContatoService
    ]
})
export class ContatosModule {}

