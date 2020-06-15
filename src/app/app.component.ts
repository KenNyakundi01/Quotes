import { Component, OnInit } from '@angular/core';
import { quotes } from '../quotes';
import { quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./puotes.component.css']
})
export class GoalComponent implements OnInit {

  qoutes:quotes[] = [
    {id:1, name:'Watch finding Nemo'},
    {id:2,name:'Buy Cookies'},
    {id:3,name:'Get new Phone Case'},
    {id:4,name:'Get Dog Food'},
    {id:5,name:'Solve math homework'},
    {id:6,name:'Plot my world domination plan'},
  ];

  constructor() { }

  ngOnInit() {
  }
}
