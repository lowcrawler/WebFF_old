import { Component, OnInit }       	from '@angular/core';
//import { FORM_DIRECTIVES, FORM_PROVIDERS } from '@angular/common';
import { QuestionComponent }		from '../question/question.component';
import { QuestionService }		from '../../services/question.service';
import { USGSQuestion } from '../../classes/USGSQuestion.class';
//import { FORM_DIRECTIVES } from '@angular/common';


@Component ({
	selector:
		'new-event',
	templateUrl:
		'app/components/newEvent/newEvent.component.html',
	directives: [QuestionComponent],// FORM_DIRECTIVES ],
	providers: [ QuestionService ]
})



export class NewEventComponent implements OnInit{

// public fullForm: FormGroup;

pageQuestions:Array<USGSQuestion>;


	constructor(
		private _questionService: QuestionService
	) {

	}


	ngOnInit() {

		// myForm = new FormGroup({
		// 	name: new FormGroup({
		// 		first: new FormControl('Nancy'),
		// 		last: new FormControl('Drew')
		// 	})
		// });

		console.log('NewEvent.component(ngOnInit)');

		this._questionService.getQuestions(null,null)
			.subscribe(
				(questions:Array<USGSQuestion>) => {
					this.pageQuestions = questions;
				},
				error => {
					console.log("err");
					//this.errorMessage  = <any>error + "ERROR: Unable to load questions for form construction: ";
					console.error(error);
				}
			);


		// TODO: Create array of question components
		// ngfor through said array in template
	}

}
