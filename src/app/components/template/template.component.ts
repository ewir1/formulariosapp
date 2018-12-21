import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid #ff5454;
    }
    .ng-valid.ng-touched:not(form) {
      border: 1px solid green;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    ejemplo: 'micorreo@email.com',
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises: any[] = [];

  sexos = ['Hombre', 'Mujer'];

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe( (resp: any) => {
          this.paises = resp;
          console.log(this.paises);
        });
  }

  ngOnInit() {
    console.log(this.sexos);
  }

  guardar(forma: NgForm) {
    console.log('ngForm', forma);
    console.log('Valor Forma', forma.value);
    console.log('Usuario', this.usuario);
  }

}
