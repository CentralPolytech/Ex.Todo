import { Component, OnInit } from '@angular/core';
import { todo } from '../../Service Model/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item : todo[]=[];
  inputNom:string = "";
  inputContent:string= "";
  constructor() { }

  ngOnInit(): void {
    this.item = [
      {
        nom: "Lundi: ",
        content: "Faire du sport"
      },
      {
        nom: "Mardi: ",
        content: "Exercice Angular"
      },
      {
        nom: "Mercredi: ",
        content: "Sortie avec amis"
      }
    ]
  }
  deleteTodo(id: number){
  this.item = this.item.filter((v, i) => i !== id);
  }
  ajouteTodo(){
    this.item.push({
      nom: this.inputNom+": ",
      content: this.inputContent
  })
    this.inputNom = "";
    this.inputContent = "";
  }
}
