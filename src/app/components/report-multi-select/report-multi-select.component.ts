
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-report-multi-select',
  templateUrl: './report-multi-select.component.html',
  styleUrls: ['./report-multi-select.component.scss']
})
export class ReportMultiSelectComponent implements OnInit {


  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings = {};




  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Autocar' },
      { item_id: 2, item_text: 'Item one' },
      { item_id: 3, item_text: 'Item two' },
      { item_id: 4, item_text: 'Item three' },
      { item_id: 5, item_text: 'item four' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Item two' },
      { item_id: 4, item_text: 'Item three' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


}
