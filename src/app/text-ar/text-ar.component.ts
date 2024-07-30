import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolTipComponent } from '../tool-tip/tool-tip.component';

@Component({
  selector: 'app-text-ar',
  standalone: true,
  imports: [FormsModule, ToolTipComponent],
  templateUrl: './text-ar.component.html',
  styleUrl: './text-ar.component.scss'
})
export class TextArComponent implements OnInit {

@Input() formField:any;
@Output() valueChange = new EventEmitter<any>();
inputValue: any;
toolMessage:string;
constructor(){
  this.toolMessage = '';
}
ngOnInit(): void {
 this.toolMessage = this.formField?.tooltip;
 this.valueChange.emit({datakey:this.formField.dataKey, dataValue:this.inputValue});
}
onInputChange(value: string) {
  this.valueChange.emit({datakey:this.formField.dataKey, dataValue:this.inputValue??value});
}


}
