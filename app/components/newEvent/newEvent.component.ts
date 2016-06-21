import { Component, OnInit }       	from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { QuestionComponent }		from '../question/question.component';
import { QuestionService }		from '../../services/question.service';
import { USGSQuestion } from '../../classes/USGSQuestion.class';


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

 // 	pageQuestions:Array<QuestionComponent> = [];
	//
	// oneQuestion:QuestionComponent;
	testText:string;
	testObj;
	singleQuestion:QuestionComponent;

	ngOnInit() {
		console.log('NewEvent.component(ngOnInit)');
		this.testText = "this is passed text!";
		this.testObj ={"foo":"bar","baz":"qux"};
		let numberQJSON = {
			"required": true,
			"label": "Station ID",
			"xmlName":"stationID",
			"type": "Number",
			"bounds_lower": 99999,
			"bounds_upper": 999999
		};
		let str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
		let jsn = JSON.parse(str);
		let q : USGSQuestion = new USGSQuestion(jsn);
		this.singleQuestion=q;

		//
		// this._questionService.getQuestions(null,null)
		// 	.subscribe(
		// 		(questions:Array<USGSQuestion>) => {
		// 			//this.oneQuestion = new QuestionComponent(questions[0]);
		//
		// 			//  questions.map(
		// 			// 	(question:USGSQuestion) => {
		// 			// 	console.log(question);
		// 			// 	var newQuest:QuestionComponent = new QuestionComponent();
		// 			// 	this.pageQuestions.push(newQuest);
		// 			// 	console.log(this.pageQuestions.length);
		// 			//  });
		// 		},
		// 		error => {
		// 			console.log("err");
		// 			//this.errorMessage  = <any>error + "ERROR: Unable to load questions for form construction: ";
		// 			console.error(error);
		// 		}
		// 	);


		// TODO: Create array of question components
		// ngfor through said array in template
	}

}
