import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms'

interface respMessage {
  success: boolean;
  error_code:String;
  error_msg: String;
}

@Component({
  selector: 'app-exam4',
  templateUrl: './exam4.component.html',
  styleUrls: ['./exam4.component.css']
})
export class Exam4Component implements OnInit {
 
  myGroup!: FormGroup;
  respMessage!: respMessage;
  constructor(private formBuilder:FormBuilder ){
    
    this.myGroup = new FormGroup({
      citizenid: new FormControl()
    });

  }

  ngOnInit(): void {
  }
  
  onSubmit():any{
    console.log(this.myGroup.value );
    var citizenid = this.myGroup.value.citizenid;
    
    if(citizenid !== null){
      var total = 0;
      var chk;
      var iPID = citizenid.replace(/-/g, "");
      var validchk = iPID.substr(12, 1);

      if(iPID.length != 13) return false;

      var j = 0;
      var iPIDarr;
      for (var n = 0; n < 12; n++) {
          iPIDarr = parseInt(iPID.substr(j, 1));
          total = (total + ((iPIDarr) * (13 - n)));
          j++;
      }
      
      chk = 11 - (total % 11);

      if (chk == 10) {
        chk = 0;
      } else if (chk == 11) {
        chk = 1;
      }

      if (chk == validchk) {
        this.respMessage = {
          "success" : true,
          "error_code" : '200',
          "error_msg" : '',
        }
      } else {
        this.respMessage = {
          "success" : false,
          "error_code" : '001',
          "error_msg" : 'citizen_id ',
        }
      }
      console.log(total);
    }else{
      this.respMessage = {
        "success" : false,
        "error_code" : '001',
        "error_msg" : 'citizen_id require',
      }
    }
    
    console.log(this.respMessage)

  }
}
