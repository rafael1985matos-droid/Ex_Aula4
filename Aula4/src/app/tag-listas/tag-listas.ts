import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-listas',
  imports: [],
  templateUrl: './tag-listas.html',
  styleUrl: './tag-listas.css',
})
export class TagListas {
  minhaString: string = 'Tony'; //isto é uma string

  /**Isto é um Array de String, ou um predio de string na memória */
  minhaLista: string[] = [
    'Rafael',
    'DATA_PIPE_DEFAULT_OPTIONS',
    'Tony',
    'Leonardo',
    'Priscila',
    '1',
    'false',
    this.minhaString,
  ];

  /**Minha Lista de ANY, não é comum usar o any, e ele desliga o TypeScript */
  minhaListaJS: any[] = [
    'Rafael',
    'DATA_PIPE_DEFAULT_OPTIONS',
    'Tony',
    'Leonardo',
    'Priscila',
    1,
    false,
  ];
data: any;

  /**Minha Lista (super Array) com error */
  //minhaListaJSNumber: number[] = ['Rafael', 'DATA_PIPE_DEFAULT_OPTIONS', 'Tony', 'Leonardo', 'Priscila', 1, false];
}
