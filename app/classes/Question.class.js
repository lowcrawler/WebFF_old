"use strict";
var Question = (function () {
    // private requiredParametersArray: Array<string> = ['label','xmlName','required','type'];
    //todo - pull commons from file or structure so constructor can be cleaner?
    //todo - add styles to label?
    function Question(questionSpec) {
        //TODO - check if eventID is in the eventINFO and pull from there and/or check if they match?
        // console.log("constructor(): ");
        // console.log(questionSpec);
        // items common to all questions:
        this.generalInfo = {
            "label": "",
            "xmlName": "",
            "required": false //false by default
        };
        // verify the JSON data
        // for(var i=0; i<this.requiredParametersArray.length; i++) {
        // 	console.log("i = "+ i + " out of " + this.requiredParametersArray.length);
        // 	console.log("checking... " + this.requiredParametersArray[i]);
        // 	// console.log("index = " + index);
        // 	// console.log("length = " + this.requiredParametersArray.length);
        // 	// if (!questionSpec.hasOwnProperty(para)) {
        // 	// 	throw new Error("Question spec was missing \'"+para+"\' key");
        // 	// }
        // 	//
        // 	// if (questionSpec[para]=="" || questionSpec[para]==null) {
        // 	// 	throw new Error("Question spec was missing \'"+para+"\' value");
        // 	// }
        //
        // 	this[eval(this.requiredParametersArray[i])] = questionSpec[this.requiredParametersArray[i]];
        //
        // }
        // this.requiredParametersArray.forEach( function(para, index, arr) {
        // 	if(this.isKeyValid(para,questionSpec)) {
        // 		this[eval(para)] = questionSpec[para];
        // 	}
        //
        //
        // });
        // this.label = questionSpec['label'];
        // this.xmlName = questionSpec['xmlName'];
        // this.required = questionSpec['required'];
        for (var _i = 0, _a = Object.entries(this.generalInfo); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            console.log(key);
        }
    }
    Question.prototype.getLabel = function () {
        return requiredInfo.label;
    };
    Question.prototype.getXMLName = function () {
        return requiredInfo.xmlName;
    };
    Question.prototype.isRequired = function () {
        return requiredInfo.required;
    };
    Question.prototype.getType = function () {
        return this.type; //todo (sub-types classes and objects)
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.class.js.map