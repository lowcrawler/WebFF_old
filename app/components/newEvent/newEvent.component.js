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
//import { FORM_DIRECTIVES, FORM_PROVIDERS } from '@angular/common';
var question_component_1 = require('../question/question.component');
var question_service_1 = require('../../services/question.service');
//import { FORM_DIRECTIVES } from '@angular/common';
var NewEventComponent = (function () {
    function NewEventComponent(_questionService) {
        this._questionService = _questionService;
    }
    NewEventComponent.prototype.ngOnInit = function () {
        // myForm = new FormGroup({
        // 	name: new FormGroup({
        // 		first: new FormControl('Nancy'),
        // 		last: new FormControl('Drew')
        // 	})
        // });
        var _this = this;
        console.log('NewEvent.component(ngOnInit)');
        this._questionService.getQuestions(null, null)
            .subscribe(function (questions) {
            _this.pageQuestions = questions;
        }, function (error) {
            console.log("err");
            //this.errorMessage  = <any>error + "ERROR: Unable to load questions for form construction: ";
            console.error(error);
        });
        // TODO: Create array of question components
        // ngfor through said array in template
    };
    NewEventComponent = __decorate([
        core_1.Component({
            selector: 'new-event',
            templateUrl: 'app/components/newEvent/newEvent.component.html',
            directives: [question_component_1.QuestionComponent],
            providers: [question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], NewEventComponent);
    return NewEventComponent;
}());
exports.NewEventComponent = NewEventComponent;
//# sourceMappingURL=newEvent.component.js.map