import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: '../views/contato-busca.component.html'
})
export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService
    ) { }

    ngOnInit(): void {
        this.contatos = this.termosDaBusca
            .debounceTime(500)  // Aguaradar por 300ms para emitir novos eventos
            .distinctUntilChanged()  //ignore se o próximo termo de busca for igual ao anterior
            .switchMap(term => {
                console.log('Fez a busca: ', term);
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
            }).catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);
            });

            this.contatos.subscribe((contatos: Contato[]) => {
                console.log('retornou do servidor: ', contatos);
            });
     }

    search(termo: string): void {
        this.termosDaBusca.next(termo);
    }
}