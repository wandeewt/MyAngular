import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms'

// Model
import { TriangleModel } from '../../models/triangle.model';

// Service
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-exam3',
  templateUrl: './exam3.component.html',
  styleUrls: ['./exam3.component.css']
})
export class Exam3Component implements OnInit {
  
  myGroup!: FormGroup;
  area !: String

  constructor(
    private formBuilder:FormBuilder,
    private crudService: CrudService
  ){
    this.myGroup = new FormGroup({
      base: new FormControl(),
      height: new FormControl(),
    });

  }

  ngOnInit(): void {
  }

  onSubmit():any{
    console.log(this.myGroup.value );
   var base = this.myGroup.value.base;
   var height = this.myGroup.value.height;
   var obj = {
     "base": base,
     "height": height,
   }
   this.crudService.getAreaTriangle(obj).subscribe( (data: any) => {
    console.log(data.area)
    this.area = data.area
  })

  }
}
