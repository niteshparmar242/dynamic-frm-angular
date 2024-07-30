import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { SelectedChipsComponent } from '../selected-chips/selected-chips.component';
import { ToolTipComponent } from '../tool-tip/tool-tip.component';

@Component({
  selector: 'app-multi-drop-down',
  standalone: true,
  imports: [SearchModalComponent, SelectedChipsComponent, ToolTipComponent],
  templateUrl: './multi-drop-down.component.html',
  styleUrl: './multi-drop-down.component.scss'
})
export class MultiDropDownComponent implements OnInit {
  modalVisible = false;
  @Input() formField:any;
  selectedValue =  signal('');
  selectedItemArray: string[]=[];
  inputArrayofChip: string[]=[];
  lengthToShow:any;
  @Input() items:any;
  @Output() selectedItemArrayHandler = new EventEmitter<any>();
  @Output() multiSelectedItemArrayHandler = new EventEmitter<any>();
  initialClose = true;
  toolMessage:string;
  
  constructor(){
    this.toolMessage = '';
  }

  ngOnInit(): void {
    this.toolMessage = this.formField?.tooltip;
  }

  openModal() {
    this.modalVisible = !this.modalVisible;
    if(!this.modalVisible && this.selectedItemArray.length==0){
      this.initialClose = false;
    }else{
      this.initialClose = true;
    }
  }

  closeModal(event?:any) {
    this.modalVisible = false;
    if(event){
      this.modalVisible = event;
    }
  }
  getSelectedValue(evt:string){
    console.log("selectedValue",evt)
    this.selectedValue.set(evt);
  }
  getSelectedItemArray(arr:string[]){
    this.selectedItemArray = arr;
    this.selectedItemArrayHandler.emit({datakey:this.formField.dataKey, dataValue:this.selectedItemArray});
    this.inputArrayofChip = this.selectedItemArray.slice(0,3);
    this.lengthToShow = this.selectedItemArray.length - 3;
  }
  updateListofChip(eve:any){
    console.log(eve);
    this.getSelectedItemArray(eve);
    
  }
}
