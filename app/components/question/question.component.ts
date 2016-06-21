import { Component, Input, OnInit}       	from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { USGSQuestion } from '../../classes/USGSQuestion.class';

@Component ({
	selector:
		'question',
	templateUrl:
		'./app/components/question/question.component.html',
	directives: [FORM_DIRECTIVES],

})


export class QuestionComponent implements OnInit {

	@Input() myQuestion:USGSQuestion
	@Input() justText:string
	@Input() justObj:object

	 constructor() {

	}

	onClick() {
		this.myQuestion.generalInfo.label = "changed";
		console.log("change attempted");
	}
}
