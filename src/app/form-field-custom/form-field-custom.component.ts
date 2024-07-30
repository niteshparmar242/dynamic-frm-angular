import { Component, Input } from '@angular/core';
import { TextArComponent } from '../text-ar/text-ar.component';
import { SingleDropDownComponent } from '../single-drop-down/single-drop-down.component';
import { SelectedChipsComponent } from '../selected-chips/selected-chips.component';
import { MultiDropDownComponent } from '../multi-drop-down/multi-drop-down.component';

@Component({
  selector: 'app-form-field-custom',
  standalone: true,
  imports: [
    TextArComponent,
    SingleDropDownComponent,
    SelectedChipsComponent,
    MultiDropDownComponent,
  ],
  templateUrl: './form-field-custom.component.html',
  styleUrl: './form-field-custom.component.scss',
})
export class FormFieldCustomComponent {
  @Input() items: any;
  @Input() dataForForm: any;
  err: boolean = false;
  singleVAl: any;
  multipleVAl: any;
  showMessage: boolean = false;
  apiPayload: any = {};
  arrayOfFormFilledValues:any = [];


  getSingleDropVal(val: any) {
    this.singleVAl = val;
    const key = val.datakey;
    const value = val.dataValue;
    this.apiPayload.single = {};
    this.apiPayload.single[key]=value;
    // this.arrayOfFormFilledValues.push(this.apiPayload.single)
    let found = false;
     for (let i = 0; i < this.arrayOfFormFilledValues.length; i++) {
         if (this.arrayOfFormFilledValues[i].hasOwnProperty(key)) {
             this.arrayOfFormFilledValues[i][key] = value;
             found = true;
             break;
         }
     }
 
     if (!found) {
         this.apiPayload.single[key] = value;
         this.arrayOfFormFilledValues.push(this.apiPayload.single);
     }
  }
  getMultiDropVal(val: any) {
    this.multipleVAl = val;
    this.apiPayload.multi = {};
    const key = val.datakey;
    const value = val.dataValue;
    this.apiPayload.multi[key]=value;

     let found = false;
     for (let i = 0; i < this.arrayOfFormFilledValues.length; i++) {
         if (this.arrayOfFormFilledValues[i].hasOwnProperty(key)) {
             this.arrayOfFormFilledValues[i][key] = value;
             found = true;
             break;
         }
     }
 
     if (!found) {
         this.apiPayload.multi[key] = value;
         this.arrayOfFormFilledValues.push(this.apiPayload.multi);
     }
  }
  handleValueChange(val: any) {
    // console.log('Input value changed:', val);
    this.apiPayload.textfield = {};
    const key = val.datakey;
    const value = val.dataValue;
    this.apiPayload.textfield[key]=value;

     let found = false;
     for (let i = 0; i < this.arrayOfFormFilledValues.length; i++) {
         if (this.arrayOfFormFilledValues[i].hasOwnProperty(key)) {
             this.arrayOfFormFilledValues[i][key] = value;
             found = true;
             break;
         }
     }
 
     if (!found) {
         this.apiPayload.textfield[key] = value;
         this.arrayOfFormFilledValues.push(this.apiPayload.textfield);
     }
  }
  clickToConsoleData() {
    if (true) {
      console.log('API SINGLE DROP DATA ARRAY', this.arrayOfFormFilledValues);
      this.showMessage = true;
    } else {
      this.err = true;
    }
  }
}
