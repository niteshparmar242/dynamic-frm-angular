import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { ToolTipComponent } from '../tool-tip/tool-tip.component';

@Component({
  selector: 'app-single-drop-down',
  standalone: true,
  imports: [SearchModalComponent, ToolTipComponent],
  templateUrl: './single-drop-down.component.html',
  styleUrl: './single-drop-down.component.scss'
})
export class SingleDropDownComponent implements OnInit{
  modalVisible = false;
  @Input() items:any;
  @Input() formField:any;
  @Output() selectedItemArrayHandler = new EventEmitter<any>();
  selectedValue =  signal('');
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
    if(!this.modalVisible && !this.selectedValue()){
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
    this.selectedValue.set(evt);
    this.selectedItemArrayHandler.emit({datakey:this.formField.dataKey,  dataValue:this.selectedValue()});
  }
}
