import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';

@Component({

    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: '../views/contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit{

    contato: Contato;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    
    ngOnInit(): void {
        console.log('on init');
        this.contato = new Contato(0, '', '', '');

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            if(id) {
                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    });
            }
        });
    }
    teste():void{
        console.log();
    }

}