import { Component, OnInit}       	from '@angular/core';
import { AgGridNg2 } from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import { Router } from '@angular/router';
import { EventService }		from './services/event.service';
import {USGSEvent} from './classes/USGSEvent.class';

@Component ({
	selector:
		'events-grid',
	templateUrl:
		'./app/eventsGrid.component.html',
	providers: [EventService],
	directives: [AgGridNg2],
})


export class EventsGridComponent implements OnInit  {
 //todo  tooltip additional informaion, like sediment family, sample medium, original submitted date/time, etc

	private gridOptions: GridOptions;
    private showGrid: boolean;
    private rowData: any[] = [];
    private columnDefs: any[];
    private rowCount: string;
	private selectedEventID: number;
	errorMessage: string; // todo - better error logging


	constructor(private _router: Router, private _eventService:EventService) {}

	ngOnInit() {
		console.log("eventsGrid.component(ngOnInit)");
		this._eventService.getEvents(null, null)
	  		.subscribe(
	  			(events:Array<USGSEvent>) =>  {
					this.rowData = events.map(event => event.getEventData()
					);
	  			},
	  			error =>
					this.errorMessage  = <any>error + "ERROR: Unable to load events for grid construction: "
				);
		this.gridOptions = <GridOptions>{};
		this.createColumnDefs();
		this.showGrid = true;
	}


    private onRowClicked($event) {
	//todo - deselect if already selected
		var nodes:any[] = this.gridOptions.api.getSelectedNodes();
		var viewEditAvailable = nodes.length==1 ? true : false;
		this.selectedEventID = $event.node.data.eventID;
    }

	private onViewEditClicked() {
		this._router.navigate( ['/view-edit-event', this.selectedEventID ] );
	}


	private createColumnDefs() {
//TODO - Pull columnDefs from service instead
	this.columnDefs = [
        {headerName: 'Date', field: "eventDefaultDate", width: 200 },
        {headerName: 'Station ID', field: "stationID" ,width:180},
        {headerName: 'Station Name', field: "stationName" ,width:160},
				{headerName: 'Total # of Containers', field: "totalNumContainers" ,width:160}
    ];
	}


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
