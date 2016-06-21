
export class USGSQuestion {

	// items common to all questions:
	 generalInfo = {
		"label" : "",
		"xmlName" : "",
		"required" : false,  //false by default
		"type" : "" //TODO: subsclasses
	}

	//todo - pull commons from file or structure so constructor can be cleaner?
	//todo - add styles to label?

	constructor(questionSpec:JSON) {
		//TODO - check if eventID is in the eventINFO and pull from there and/or check if they match?
		// console.log("constructor(): ");
		// console.log(questionSpec);

		// verify the questionSpec has the required general info and, if so assign to the generalInfo object.  If not, throw an error.
		for(let key in this.generalInfo) {
			if(this.generalInfo.hasOwnProperty(key)) {
				if (!questionSpec.hasOwnProperty(key)) {
					throw new Error("USGSQuestion spec was missing \'"+key+"\' key");
				}
				if (questionSpec[key]==="" || questionSpec[key]==null) {
					throw new Error("USGSQuestion spec was missing \'"+key+"\' value");
				}
				this.generalInfo[key]=questionSpec[key];
			}
		}

		//todo subclasses, etc.
	}



	getLabel() :string {
		return this.generalInfo.label;
	}

	getXMLName() :string {
		return this.generalInfo.xmlName;
	}

	isRequired() :boolean {
		return this.generalInfo.required;
	}

	getType() : string {
		return this.generalInfo.type; //todo (sub-types classes and objects)

	}

	toString() :string {
		return "Question: Label-" + this.getLabel() + " xmlName-" + this.getXMLName() + " required-"+this.isRequired();
	}

}
