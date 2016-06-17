export class Question {

	// items common to all questions:
	private label:string;
	private xmlName:string;
	private required:boolean;

	private requiredParametersArray = ['label','xmlName','required','type']
	//todo - pull commons from file or structure so constructor can be cleaner?
	//todo - add styles to label?

	constructor(questionSpec:JSON) {
		//TODO - check if eventID is in the eventINFO and pull from there and/or check if they match?
		console.log("constructor(): ");
		console.log(questionSpec);

		// verify the JSON data
		this.requiredParametersArray.forEach( function(para) {
			if (!questionSpec.hasOwnProperty(para)) {
				console.log("missing key");
				throw new Error("Question spec was missing \'"+para+"\' key");
			}

			if (questionSpec[para]=="" || questionSpec[para]==null) {
				console.log('missing value');
				throw new Error("Question spec was missing \'"+para+"\' value");
			}
		});

		this.label = questionSpec['label'];

}

	getLabel() :string {
		return this.label;
	}

	getXMLName() :string {
		return this.xmlName;
	}

	isRequired() :boolean {
		return this.required;
	}

}
