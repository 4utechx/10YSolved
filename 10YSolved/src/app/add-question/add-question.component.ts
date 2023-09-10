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
  gridRadios:string="";
  CorrectAnswer:string= "";
  Solutions:string= "";
  CreatedDate: string= "";
  Year: string="";
  ExamType:string="";
  ExamSubType:string="";

  constructor() { }

  ngOnInit() {
  }
    myFunc(){
    console.log(this.QuestionEnglish);
    console.log(this. QuestionHindi);
    // console.log(this.Option);
    console.log(this.gridRadios);
    console.log(this. CorrectAnswer);
    console.log(this. Solutions);
    console.log(this. CreatedDate);
   
    console.log(this.Year);
    console.log(this.ExamType);
    console.log(this. ExamSubType);
   
   }
}
