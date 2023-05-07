import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent {
   variableForShowingInput: string = ''
  showText(input: string){
       this.variableForShowingInput = input.split('').reverse().join('')
  }
}
