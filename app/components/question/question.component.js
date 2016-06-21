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
var USGSQuestion_class_1 = require('../../classes/USGSQuestion.class');
var QuestionComponent = (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.onClick = function () {
        this.myQuestion.generalInfo.label = "changed";
        console.log("change attempted");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', USGSQuestion_class_1.USGSQuestion)
    ], QuestionComponent.prototype, "myQuestion", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionComponent.prototype, "justText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], QuestionComponent.prototype, "justObj", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question',
            templateUrl: './app/components/question/question.component.html',
            directives: [common_1.FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map