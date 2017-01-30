import { Component, OnInit } from '@angular/core'

import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';
import { DialogService } from '../../dialog.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: '../views/contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit{

    contatos: Contato[];

    constructor(
        private contatoService: ContatoService,
        private dialogService : DialogService
    ){}

    ngOnInit(): void {
        this.contatoService.getContatos()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                console.log('Aconteceu um erro: ', err)
            });
    }

    onDelete(contato: Contato): void{
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + '?')
            .then((canDelete: boolean) => {

                if(canDelete){

                    this.contatoService
                        .delete(contato)
                        .then((conatto: Contato) => {

                            this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id);

                        }).catch(err => {
                            console.log(err);
                        });

                }
            });
    }
}