import { USGSQuestion } from './USGSQuestion.class';
describe('USGSQuestion class tests', () => {
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

	describe('USGSQuestion constructor tests', () => {

		it("New USGSQuestion object returns correct 'xmlName'", () => {
			let str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			let q : USGSQuestion = new USGSQuestion(jsn);
			expect(q.getXMLName()).toEqual('stationID');
		});

		it("New USGSQuestion object returns correct 'label'", () => {
			let str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			let q : USGSQuestion = new USGSQuestion(jsn);
			expect(q.getLabel()).toEqual('Station ID');
		});

		it("New USGSQuestion object returns correct 'type'", () => {
			let str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			let q : USGSQuestion = new USGSQuestion(jsn);
			console.log(q.getType());
			expect(q.getType()).toEqual('Number');
		});

		it("New USGSQuestion object correct returns 'required' value", () => {
			let str = JSON.stringify(numberQJSON); //todo - this can't be the best way to do this....
			let jsn = JSON.parse(str);
			let q : USGSQuestion = new USGSQuestion(jsn);
			expect(q.isRequired()).toEqual(true);
		});

		it("Constructor throws error when given JSON missing label key", ()=> {
			let missingLabelKeyJSON = JSON.parse(JSON.stringify(numberQJSON));
			delete missingLabelKeyJSON['label'];
			expect( ()=> new USGSQuestion(missingLabelKeyJSON) ).toThrow(new Error("USGSQuestion spec was missing 'label' key"));
		});

		it("Constructor throws error when given JSON missing xmlName value", ()=> {
			let blankLabelJSON = JSON.parse(JSON.stringify(numberQJSON));
			blankLabelJSON['xmlName'] = "";
			expect( ()=> new USGSQuestion(blankLabelJSON) ).toThrow(new Error("USGSQuestion spec was missing 'xmlName' value"));
		});

		it("Constructor throws error when given JSON with null required value", ()=> {
			let nullValuelJSON = JSON.parse(JSON.stringify(numberQJSON));
			nullValuelJSON['required'] = null;
			expect( ()=> new USGSQuestion(nullValuelJSON) ).toThrow(new Error("USGSQuestion spec was missing 'required' value"));
		});
		it("Constructor throws error when given JSON with false required value", ()=> {
			let falseValuelJSON = JSON.parse(JSON.stringify(numberQJSON));
			falseValuelJSON['required'] = false;
			expect( ()=> new USGSQuestion(falseValuelJSON) ).not.toThrow(new Error("USGSQuestion spec was missing 'required' value"));
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
