"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var question_component_1 = require('../question/question.component');
var question_service_1 = require('../../services/question.service');
var USGSQuestion_class_1 = require('../../classes/USGSQuestion.class');
var NewEventComponent = (function () {
    function NewEventComponent(_questionService) {
        this._questionService = _questionService;
    }
    NewEventComponent.prototype.ngOnInit = function () {
        console.log('NewEvent.component(ngOnInit)');
        this.testText = "this is passed text!";
        this.testObj = { "foo": "bar", "baz": "qux" };
        var numberQJSON = {
            "required": true,
            "label": "Station ID",
            "xmlName": "stationID",
            "type": "Number",
            "bounds_lower": 99999,
            "bounds_upper": 999999
        };
        var str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
        var jsn = JSON.parse(str);
        var q = new USGSQuestion_class_1.USGSQuestion(jsn);
        this.singleQuestion = q;
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
    };
    NewEventComponent = __decorate([
        core_1.Component({
            selector: 'new-event',
            templateUrl: 'app/components/newEvent/newEvent.component.html',
            directives: [question_component_1.QuestionComponent, common_1.FORM_DIRECTIVES],
            providers: [question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], NewEventComponent);
    return NewEventComponent;
}());
exports.NewEventComponent = NewEventComponent;
//# sourceMappingURL=newEvent.component.js.map