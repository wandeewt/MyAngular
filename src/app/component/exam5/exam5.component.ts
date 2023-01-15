import { Component } from '@angular/core';

import { ListModel } from '../../models/list.model';

@Component({
  selector: 'app-exam5',
  templateUrl: './exam5.component.html',
  styleUrls: ['./exam5.component.css']
})
export class Exam5Component {

  arr: ListModel[] = [];

  constructor(){
    
    var end = 4
    for (let i = 0; i < end; i++) {
      var items = []
      var num = i + 1 + ''
      var star = ''
      items.push(num);
      for(let j = 0; j < (i*2); j++){
        items.push('*')
      }
      items.push(num);
      this.arr.push({"item":items})
    }
    
    for (let i = end-2; i >= 0; i--) {
      var items = []
      var num = i + 1 + ''
      var star = ''
      items.push(num);
      for(let j = 0; j < (i*2); j++){
        items.push('*')
      }
      items.push(num);
      this.arr.push({"item":items})
    }

    console.log(this.arr)

  }
}
