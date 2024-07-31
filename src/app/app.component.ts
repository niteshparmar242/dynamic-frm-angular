import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextArComponent } from './text-ar/text-ar.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { SingleDropDownComponent } from "./single-drop-down/single-drop-down.component";
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient, HttpParams  } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';
import { FormFieldCustomComponent } from "./form-field-custom/form-field-custom.component";
import { ApiCallsService } from './api-calls.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextArComponent, SingleDropDownComponent, HttpClientModule, FormFieldCustomComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  implements OnInit{
  title = 'dynamic-form';
  modalVisible = false;
  dataForForm:any;
  items:any[] = [];
  skills: any;
  countries: any;
  page = 1;
  structure: any[] = [];
  users: any[] = [];
  currentPage = 1;
  totalPages = 0;
  limit = 10;

  constructor(private http: HttpClient, private apiCallsService: ApiCallsService) {}

  ngOnInit() {
    this.http.get<string[]>('/api/structure').subscribe(
      (dataForForm:any) => {
        console.log('dataForForm:', dataForForm);
        this.dataForForm = dataForForm
      },
      error => {
        console.error('Error fetching skills:', error);
      }
    );
    // this.apiCallsService.scrollBottom$.subscribe(isBottom => {
    //   if (isBottom) {
    //     this.nextPage();
    //   }
    // });
    // this.loadUsers();
    // this.loadStructure();
    // this.loadCountries();
    // this.loadSkills();
    // this.loadSkills();

    // this.http.get<string[]>('/api/countries').subscribe(
    //   (countries:any) => {
    //     console.log('Countries:', countries);
    //     this.items= countries;
    //   },
    //   (error:any) => {
    //     console.error('Error fetching countries:', error);
    //   }
    // );

  
  }
  openModal() {
    this.modalVisible = !this.modalVisible;
  }

  closeModal(event?:any) {
    this.modalVisible = false;
    if(event){
      this.modalVisible = event;
    }
  }

  // loadSkills() {
  //   this.apiCallsService.getSkills(this.page, this.limit).subscribe(
  //     (data) => {
  //       this.skills = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching skills:', error);
  //     }
  //   );
  // }
  

  // loadNextPage() {
  //   this.page++;
  //   this.loadSkills();
  // }

  // loadPreviousPage() {
  //   if (this.page > 1) {
  //     this.page--;
  //     this.loadSkills();
  //   }
  // }

  // loadCountries() {
  //   this.apiCallsService.getCountries().subscribe(
  //     (data) => {
  //       this.countries = data;
  //       this.items= data;
  //     },
  //     (error) => {
  //       console.error('Error fetching countries:', error);
  //     }
  //   );
  // }

  // loadStructure() {
  //   this.apiCallsService.getStructure().subscribe(
  //     (data) => {
  //       this.structure = data;
  //       this.dataForForm = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching structure:', error);
  //     }
  //   );
  // }

  // loadSkills() {
  //   const params = new HttpParams()
  //     .set('page', this.page.toString())
  //     .set('limit', this.limit.toString());

  //   this.http.get<string[]>('/api/skills', { params }).subscribe(
  //     (data) => {
  //       this.skills = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching skills:', error);
  //     }
  //   );
  // }

  // loadNextPage() {
  //   this.page++;
  //   this.loadSkills();
  // }

  // loadPreviousPage() {
  //   if (this.page > 1) {
  //     this.page--;
  //     this.loadSkills();
  //   }
  // }

  loadCountries() {
    this.http.get<string[]>('/api/countries').subscribe(
      (data) => {
        this.countries = data;
        this.items= data;
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
  }
  // loadSkills() {
  //   const params = new HttpParams()
  //     .set('page', this.page.toString())
  //     .set('limit', this.limit.toString());

  //   this.http.get<string[]>('/api/skills', { params }).subscribe(
  //     (data) => {
  //       this.skills = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching skills:', error);
  //     }
  //   );
  // }

  // loadNextPage() {
  //   this.page++;
  //   this.loadSkills();
  // }

  // loadPreviousPage() {
  //   if (this.page > 1) {
  //     this.page--;
  //     this.loadSkills();
  //   }
  // }

  // loadUsers(): void {
  //   const skip = (this.currentPage - 1) * this.limit;
  //   this.apiCallsService.getUsers(this.limit, skip).subscribe((data:any) => {
  //     this.users = data.users;
  //     this.users.forEach((user:any)=>{
  //       this.items?.push(user['firstName'])
  //     })
  //     console.log('users', this.users)
  //     this.totalPages = Math.ceil(data.total / this.limit);
  //   });
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.loadUsers();
  //   }
  // }

  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.loadUsers();
  //   }
  // }
  // handleScroll(evt:any){
  //   console.log("🎁",evt)
  //   if(evt){
  //     this.nextPage()
  //   }
  // }
}