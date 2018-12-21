import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(4)
                                    ]),
      'apellido': new FormControl('', Validators.required ),
      'correo': new FormControl('', [
                                      Validators.required
                                      // Validators.pattern('^/w+@[a-zA-Z_]+?/.[a-zA-Z]{2,3}$')
                                    ])
    });
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }

}
