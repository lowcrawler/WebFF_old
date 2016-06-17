import { Question } from './Question.class';
describe('Question class tests', () => {
	let numberQJSON = {
		"required": true,
		"label": "Station ID",
		"xmlName":"stationID",
		"type": "Number",
		"bounds_lower": 99999,
		"bounds_upper": 999999
	};
	let textQJSON = {
		"required": true,
		"label": "Station Name",
		"xmlName":"stationName",
		"type": "Text",
		"maxLength": 15
	};
	let textfieldQJSON
	let dateQJSON = {
		"required": true,
		"label": "Date",
		"xmlName":"eventDefaultDate",
		"type": "Date"
	};
	let dropDownQJSON = {
		"required": true,
		"label": "Collected Via",
		"xmlName":"collectedVia",
		"type": "DropDown",
		"dropDownOptions" : {
			"option1":"Wading",
			"option2":"Cable",
			"option3":"Ice",
			"option4":"Boat",
			"option5":"Bridge",
			"Default":"Select...",
			"DefaultOK":false
		}
	};
	let checkboxQJSON = {
		"required": false,
		"label":"Test Method",
		"xmlName":"weatherTestMethod",
		"type": "checkbox",
		"checkboxOptions": {
			"option1":"Finger",
			"option2":"Mecury Thermometer",
			"option3":"Iphone",
			"option4":"NWS site",
			"multiAllowed":true //TODO test -multiAllowed=false
		}
	};
	let timeQJSON = {
		"required": false,
		"label": "What time is it?",
		"xmlName":"time",
		"type": "time",
		"bounds_earliest":"600",
		"bounds_latest":"1000"
	};

	// must test "defaulValue" for all
	// must test "defaultValueOK" for all
	// must test secondary questions

	describe('Question constructor tests', () => {

		it("New Question object returns correct 'xmlName'", () => {
			let str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			let q : Question = new Question(jsn);
			expect(q.getXMLName()).toEqual('stationID');
		});

		it("New Question object returns correct 'label'", () => {
			let str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			let q : Question = new Question(jsn);
			expect(q.getLabel()).toEqual('Station ID');
		});

		it("New Question object correct 'required' value", () => {
			let str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			let q : Question = new Question(jsn);
			expect(q.isRequired()).toEqual(true);
		});

		it("Constructor throws error when given JSON missing label key", ()=> {
			console.log("MISSING KEY TEST");

			let missingLabelKeyJSON = JSON.parse(JSON.stringify(numberQJSON));
			delete missingLabelKeyJSON['label'];
			let str = JSON.stringify(missingLabelKeyJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			expect( ()=> new Question(jsn) ).toThrow(new Error("Question spec was missing 'label' key"));
		});

		it("Constructor throws error when given JSON missing xmlName value", ()=> {
			let blankLabelJSON = JSON.parse(JSON.stringify(numberQJSON));
			blankLabelJSON['xmlName'] = "";
			let str = JSON.stringify(blankLabelJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			expect( ()=> new Question(jsn) ).toThrow(new Error("Question spec was missing 'xmlName' value"));
		});

		it("Constructor throws error when given JSON with null required value", ()=> {
			let nullValuelJSON = JSON.parse(JSON.stringify(numberQJSON));
			nullValuelJSON['required'] = null;
			let str = JSON.stringify(nullValuelJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			expect( ()=> new Question(jsn) ).toThrow(new Error("Question spec was missing 'required' value"));
		});





	}); // end constructor tests


	// });
	//
	// it("Set Event Data changes data", () => {
	// 	let newJSON : JSON = JSON.parse('{"one":"fish","red":"blue"}');
	// 	evt.setEventData(newJSON);
	// 	expect(evt.getEventData()).toEqual(newJSON);
	// });
});
