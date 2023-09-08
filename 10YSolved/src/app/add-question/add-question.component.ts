import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent  implements OnInit {

  QuestionEnglish:string= "";
  QuestionHindi:string= "";
  Option:object={};
  CorrectAnswer:string= "";
  Solutions:string= "";
  CreatedDate: string= "";
  Year: string="";
  ExamType:string="";
  ExamSubType:string="";
  constructor() { }

  ngOnInit() {
  }
    // myFunc()
  //  console.log(this.QuestionEnglish);
  //   console.log(this.company);
  //   console.log(this.email);
  //   console.log(this.lastname);
  //   console.log(this.title);
  //   console.log(this.phoneNum);
  //   console.log(this.needHelp);
   
  // }
}
