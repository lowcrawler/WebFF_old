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
var question_component_1 = require('app/components/question/question.component');
var question_service_1 = require('app/services/question.service');
var NewEventComponent = (function () {
    function NewEventComponent(_questionService) {
        this._questionService = _questionService;
    }
    //questions:array<QuestionComponent>;
    NewEventComponent.prototype.ngOnInit = function () {
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
    };
    NewEventComponent = __decorate([
        core_1.Component({
            selector: 'new-event',
            templateUrl: 'app/components/newEvent/newEvent.component.html',
            directives: [question_component_1.QuestionComponent, common_1.FORM_DIRECTIVES],
            providers: [question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof question_service_1.QuestionService !== 'undefined' && question_service_1.QuestionService) === 'function' && _a) || Object])
    ], NewEventComponent);
    return NewEventComponent;
    var _a;
}());
exports.NewEventComponent = NewEventComponent;
//# sourceMappingURL=newEvent.component.js.map