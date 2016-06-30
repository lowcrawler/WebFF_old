import { Component, Input, OnInit}       	from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { USGSQuestion } from '../../classes/USGSQuestion.class';

@Component ({
	selector:
		'question',
	templateUrl:
		'./app/components/question/question.component.html',
	directives: [FORM_DIRECTIVES]

})


export class QuestionComponent {

	@Input() myQuestion:USGSQuestion

	 constructor() {
		 console.log("QuestionComponent->constructor");
	}

	ngOnInit() {
		console.log("QuestionComponent->ngOnInit");
	}

	onSubmit(val) {
		console.log("You submitted: " + val.sku + " at " + new Date().getTime());
		console.log("blerg");
	}


}
