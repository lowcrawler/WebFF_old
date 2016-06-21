import { Component }       	from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

@Component ({
	selector:
		'question',
	templateUrl:
		'./app/components/question/question.component.html',
	directives: [FORM_DIRECTIVES]
})


export class QuestionComponent  {
	//constructor(private _eventService:EventService) {}

}
