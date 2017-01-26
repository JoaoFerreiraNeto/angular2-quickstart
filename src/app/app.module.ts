import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './home/components/app.component';
import { AppRoutingModule } from './configurations/app-routing.module'
import { ContatosModule } from './contatos/contatos.module';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

