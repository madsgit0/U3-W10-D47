import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.css']
})
export class TodolistPage implements OnInit {

  todos = [{
    id: 1,
    text: "testo di prova",
    check: "",
  },{
    id: 2,
    text: "testo di ",
    check: "check",
  },{
    id: 3,
    text: "abc",
    check: "",
  }]

  constructor() { }

  ngOnInit(): void {
  }
 removeTodo(i: number){
  this.todos.splice(i,1);
 }
 checkTodo(i: number){
  this.todos[i].check = this.todos[i].check === "check" ? "" : "check";
 }
}
