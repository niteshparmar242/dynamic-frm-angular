import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss'
})
export class SearchModalComponent {
  @Output() closeModalHandler = new EventEmitter<boolean>();
  @Output() selectedItemHandler = new EventEmitter<string>();
  @Output() selectedItemArrayHandler = new EventEmitter<any>();
  @Input() items:any;

  searchText: string = '';
  // items: string[] = [
  //   'Antino User',
  //   'Don Draper',
  //   'Michael Scott',
  //   'Jennifer Aniston',
  //   'Ryan Mcintire',
  //   'Nicholas Nelson',
  //   'Gerardo Murphey'
  // ];
  filteredItems: string[] = [];
  selectedItem: any;
  @Input() multiSelect:boolean=false;
  selectedItems: any[]=[];

  ngOnInit() {
    this.filteredItems = this.items;
  }

  filterItems() {
    this.filteredItems = this.items.filter((item:any) =>
      item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  closeModal() {
    this.closeModalHandler.emit(false);
  }
  getSelectedItem(item:string){
    this.selectedItemHandler.emit(item);
    this.selectedItem = item;
  }
 
  selectMultiple(item: string, event: Event) {
    const checkbox = (event.target as HTMLInputElement);
    if (checkbox.checked) {
      if (!this.selectedItems.includes(item)) {
        this.selectedItems.push(item);
      }
    } else {
      this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem !== item);
    }
    // console.log('🎈🎈🎈', this.selectedItems)
    this.selectedItemArrayHandler.emit(this.selectedItems);
  }

}
