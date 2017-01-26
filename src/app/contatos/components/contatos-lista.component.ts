import { Component, OnInit } from '@angular/core'

import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: '../views/contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit{

    contatos: Contato[];

    constructor(private contatoService: ContatoService){}

    ngOnInit(): void {
        this.contatoService.getContatos()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => console.log(err));
    }
    
}