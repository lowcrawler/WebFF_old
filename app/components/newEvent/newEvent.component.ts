import { Component }       	from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { QuestionComponent }		from 'app/components/question/question.component';
import { QuestionService }		from 'app/services/question.service';

@Component ({
	selector:
		'new-event',
	templateUrl:
		'app/components/newEvent/newEvent.component.html',
	directives: [QuestionComponent, FORM_DIRECTIVES],
	providers: [QuestionService]
})



export class NewEventComponent implements OnInit{

	constructor(private _questionService: QuestionService) {}

 	//questions:array<QuestionComponent>;

	ngOnInit() {
		console.log('NewEvent.component(ngOnInit)');
		// this._questionService.getQuestions()
		// 	.subscribe(
		// 		(questions:Array<Question>) => {
		// 			questions.map(question => console.log(question));
		// 		},
		// 		error => this.errorMessage  = <any>error + "ERROR: Unable to load questions for form construction: "
		// 	);
		//TODO: Create array of question components
		//ngfor through said array in template
	}

}
