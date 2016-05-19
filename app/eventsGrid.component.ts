import { Component }       	from '@angular/core';
import { AgGridNg2 } from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import { Router } from '@angular/router';

@Component ({
	selector: 
		'events-grid',
	templateUrl: 
		'./app/eventsGrid.component.html',
	directives: [AgGridNg2],
})


export class EventsGridComponent  { 
 // todo   Sort numbers correctly without leading zeros
 //todo  tooltip additional informaion, like sediment family, sample medium, original submitted date/time, etc

private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[];
    private columnDefs: any[];
    private rowCount: string;
	private selectedEventID: number;

	



	
	constructor(private _router: Router) {
	
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
		this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }
	

    private onRowClicked($event) {
	//TODO - deselect if already selected
		var nodes:any[] = this.gridOptions.api.getSelectedNodes();
		var viewEditAvailable = nodes.length==1 ? true : false;
		this.selectedEventID = $event.node.data.eventID;
		console.log('onRowClicked: ' + $event.node.data.eventID);
    }
	
	private onViewEditClicked() {
		let url:string = '/view-edit-event/'+this.selectedEventID;
		console.log("ViewEditClicked! - attempting to navigate to " + url);
		
		this._router.navigate( ['/view-edit-event', this.selectedEventID ] );
	}	
	
	private createRowData() {
	this.rowData = [
        {"eventID":"100", "eventDefaultDate":"2016-05-18","stationID":"123456","stationName":"Jordan","totalNumContainers":"10"},
		{"eventID":"101","eventDefaultDate":"2015-05-07","stationID":"234234","stationName":"Pideon River at Crossroads","totalNumContainers":"20"},
		{"eventID":"102","eventDefaultDate":"2015-05-01","stationID":"103283","stationName":"Pipestone creek","totalNumContainers":"40"},
		{"eventID":"103","eventDefaultDate":"2016-04-14","stationID":"345344","stationName":"St. Croix","totalNumContainers":"12"},
		{"eventID":"104","eventDefaultDate":"2016-02-12","stationID":"789787","stationName":"Scanlon","totalNumContainers":"8"},
		{"eventID":"105","eventDefaultDate":"2016-01-28","stationID":"098889","stationName":"St. Paul Science Museum","totalNumContainers":"10"},
		{"eventID":"106","eventDefaultDate":"2015-11-11","stationID":"787909","stationName":"Mississippi at Brainerd","totalNumContainers":"4"},
		{"eventID":"107","eventDefaultDate":"2014-03-03","stationID":"980899","stationName":"Harmony crossing","totalNumContainers":"16"},
		{"eventID":"108","eventDefaultDate":"2016-05-18","stationID":"123456","stationName":"Jordan","totalNumContainers":"10"},
		{"eventID":"109","eventDefaultDate":"2015-05-07","stationID":"234234","stationName":"Pideon River at Crossroads","totalNumContainers":"20"},
		{"eventID":"110","eventDefaultDate":"2015-05-01","stationID":"103283","stationName":"Pipestone creek","totalNumContainers":"40"},
		{"eventID":"111","eventDefaultDate":"2016-04-14","stationID":"345344","stationName":"St. Croix","totalNumContainers":"12"},
		{"eventID":"112","eventDefaultDate":"2016-02-12","stationID":"789787","stationName":"Scanlon","totalNumContainers":"8"},
		{"eventID":"113","eventDefaultDate":"2016-01-28","stationID":"098889","stationName":"St. Paul Science Museum","totalNumContainers":"10"},
		{"eventID":"114","eventDefaultDate":"2016-03-13","stationID":"354345","stationName":"St. Louis","totalNumContainers":"15"}
    ];
	}


	private createColumnDefs() {
	
	
	this.columnDefs = [
        {headerName: 'Date', field: "eventDefaultDate", width: 200 },
        {headerName: 'Station ID', field: "stationID" ,width:180},
        {headerName: 'Station Name', field: "stationName" ,width:160},
		{headerName: 'Total # of Containers', field: "totalNumContainers" ,width:160}
    ];
	}
	
	//gridOptions
	
//	temp = this.gridOptions.setRowData(myRowDataToo);

private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }

    private onModelUpdated() {
  //      console.log('onModelUpdated');
        this.calculateRowCount();
    }

    private onReady() {
    //    console.log('onReady');
        this.calculateRowCount();
    }

    private onCellClicked($event) {
    //    console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellValueChanged($event) {
   //     console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    }

    private onCellDoubleClicked($event) {
   //     console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellContextMenu($event) {
    //    console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellFocused($event) {
   //     console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    }

    private onRowSelected($event) {
       // console.log('onRowSelected: ' + $event.node.data.name);
		//console.log('ROW SELECTED: ' );
		//var nodes:any[] = this.gridOptions.api.getSelectedNodes();
		//console.log(nodes);
		
		//for(i=0;)
    }

    private onSelectionChanged() {
    //    console.log('selectionChanged');
    }

    private onBeforeFilterChanged() {
   //     console.log('beforeFilterChanged');
    }

    private onAfterFilterChanged() {
   //     console.log('afterFilterChanged');
    }

    private onFilterModified() {
   //     console.log('onFilterModified');
    }

    private onBeforeSortChanged() {
   //     console.log('onBeforeSortChanged');
    }

    private onAfterSortChanged() {
   //     console.log('onAfterSortChanged');
    }

    private onVirtualRowRemoved($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    }


	

    private onQuickFilterChanged($event) {
     //   this.gridOptions.api.setQuickFilter($event.target.value);
    }

    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    private onColumnEvent($event) {
      //  console.log('onColumnEvent: ' + $event);
    }




}