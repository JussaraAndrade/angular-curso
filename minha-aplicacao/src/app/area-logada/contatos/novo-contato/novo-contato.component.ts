import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(){
    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl(),
    // });
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      banco: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email]
    });
  }

  exibeErro(nomeControle: string) {
    if (!this.contatoForm.get(nomeControle)) {
      return false;
    }

    return this.contatoForm.get(nomeControle)?.invalid && this.contatoForm.get(nomeControle)?.touched;
  }

  validateAllFormFields(){
    Object.keys(this.contatoForm.controls).forEach(field =>{
      const control = this.contatoForm.get(field);
      control?.markAsTouched();
    });
  }

  salvarContato(){
    if (this.contatoForm.invalid) {
      this.validateAllFormFields();
      return;
    }
    console.log(this.contatoForm);
  }

}
