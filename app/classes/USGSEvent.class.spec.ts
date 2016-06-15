import { USGSEvent } from './USGSEvent.class';
describe('USGSEvent tests', () => {
	let data = '{"foo":"bar", "moo":"bah"}';
	let mockJSON : JSON = JSON.parse(data);
	let evtID : string = "123456";
	let evt: USGSEvent = new USGSEvent(mockJSON,evtID);

	describe('USGSEvent constructor tests', () => {

		it('New USGSEvent object has passed eventID', () => {
    		expect(evt.getEventID()).toEqual(evtID);
		});

		it('New USGSEvent object has generated eventID', () => {
			let evt: USGSEvent = new USGSEvent(mockJSON);
			expect(evt.getEventID().length).toEqual(50);
			expect(evt.getEventID().charAt(14)).toEqual('4');
		});

		it('New USGSEvent object returns JSON data', () => {
			expect(evt.getEventData()).toEqual(mockJSON);
		});
	});

	it("Set Event Data changes data", () => {
		let newJSON : JSON = JSON.parse('{"one":"fish","red":"blue"}');
		evt.setEventData(newJSON);
		expect(evt.getEventData()).toEqual(newJSON);
	});
});
