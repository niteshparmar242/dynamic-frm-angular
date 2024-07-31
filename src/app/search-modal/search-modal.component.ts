import { Component, EventEmitter, Input, Output, HostListener  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiCallsService } from '../api-calls.service';

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
  currentPage = 1;
  totalPages = 0;
  limit = 10;
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
  constructor( private apiCallsService: ApiCallsService) {}
  ngOnInit() {
    // this.filteredItems = this.items;
    this.loadUsers();
  }

  filterItems() {
    // this.filteredItems = this.items.filter((item:any) =>
    //   item.toLowerCase().includes(this.searchText.toLowerCase())
    // );
    this.searchUsers();
  }

  searchUsers(): void {
    this.filteredItems=[];
    this.apiCallsService.searchUsers(this.searchText, this.limit).subscribe(data => {
      let users = data.users;
      users.forEach((user:any)=>{
        this.filteredItems?.push(user['firstName'])
      })
      this.totalPages = Math.ceil(data.total / this.limit);
    });
  }

  loadUsers(): void {
    const skip = (this.currentPage - 1) * this.limit;
    this.apiCallsService.getUsers(this.limit, skip).subscribe((data:any) => {
      let users = data.users;
      users.forEach((user:any)=>{
        this.filteredItems?.push(user['firstName'])
      })
      this.totalPages = Math.ceil(data.total / this.limit);
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.searchText ? this.searchUsers() : this.loadUsers();
      // this.searchUsers();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchText ? this.searchUsers() : this.loadUsers();
      // this.searchUsers();
    }
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

  onScroll(event: any): void {
    const element = event.target;
    const isBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    this.apiCallsService.notifyScrollBottom(isBottom);
    if(isBottom){
      this.nextPage();
    }
  }
 

}
