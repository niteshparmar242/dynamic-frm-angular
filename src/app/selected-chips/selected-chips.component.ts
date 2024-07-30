import { Component, Input, input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-chips',
  standalone: true,
  imports: [],
  templateUrl: './selected-chips.component.html',
  styleUrl: './selected-chips.component.scss'
})
export class SelectedChipsComponent implements OnInit{
@Input() listOfChip:any;
@Output() handleRemovedChip:EventEmitter<any> = new EventEmitter();

ngOnInit(): void {
  console.log(this.listOfChip);
}

removeChip(item:any){
  console.log(item)
  let chipsListAfterItemRemoved:any;
  chipsListAfterItemRemoved = this.listOfChip.filter((val:any)=> val !=item)
  this.listOfChip.filter((val:any)=> val !=item)
  // console.log('List of chips filtered',this.listOfChip);
  console.log('List of chips chipsListAfterItemRemoved',chipsListAfterItemRemoved);
  this.handleRemovedChip.emit(chipsListAfterItemRemoved);
  this.listOfChip = chipsListAfterItemRemoved;
}

}
