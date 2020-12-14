import { Component, Input, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('changeState',[
      state('state1', style({
        backgroundColor:'green',
        transform:'translateX(-50%)', opacity: 1
        /*backgroundColor:'green',

        transform:'scale(1)'*/,
      })),
      state('state2',style({
        backgroundColor:'red',
        transform: 'translateX(-250%)', opacity: 0,     display:'none',
        //transform:'scale(1.5)',
      })),
      transition('*=>state1', animate('300ms')),
      transition('*=>state2', animate('2300ms'))
    ])
  ]
})
export class AnimateComponent implements OnInit {

  @Input() currentState;

  constructor() { }

  ngOnInit(): void {

  }

}
