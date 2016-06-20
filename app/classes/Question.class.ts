export class Question {

	// items common to all questions:
	private generalInfo = {
		"label" : "",
		"xmlName" : "",
		"required" : false  //false by default
	}
	// private label:string;
	// private xmlName:string;
	// private required:boolean;
	private type:string; //todo subclasses

	// private requiredParametersArray: Array<string> = ['label','xmlName','required','type'];
	//todo - pull commons from file or structure so constructor can be cleaner?
	//todo - add styles to label?

	constructor(questionSpec:JSON) {
		//TODO - check if eventID is in the eventINFO and pull from there and/or check if they match?
		// console.log("constructor(): ");
		// console.log(questionSpec);


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



		for(let key in this.generalInfo) {
			if(this.generalInfo.hasOwnProperty(key)) {
				console.log(key);
				if (!questionSpec.hasOwnProperty(key)) {
					throw new Error("Question spec was missing \'"+key+"\' key");
				}
				if (questionSpec[key]=="" || questionSpec[key]==null) {
					throw new Error("Question spec was missing \'"+key+"\' value");
				}
			}
		}


	}



	getLabel() :string {
		return requiredInfo.label;
	}

	getXMLName() :string {
		return requiredInfo.xmlName;
	}

	isRequired() :boolean {
		return requiredInfo.required;
	}

	getType() : string {
		return this.type; //todo (sub-types classes and objects)

	}

}
