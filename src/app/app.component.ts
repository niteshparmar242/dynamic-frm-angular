import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextArComponent } from './text-ar/text-ar.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { SingleDropDownComponent } from "./single-drop-down/single-drop-down.component";
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient  } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';
import { FormFieldCustomComponent } from "./form-field-custom/form-field-custom.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextArComponent, SingleDropDownComponent, HttpClientModule, FormFieldCustomComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'dynamic-form';
  modalVisible = false;
  dataForForm:any;
  items:any;

  constructor(private http: HttpClient) {}

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

    this.http.get<string[]>('/api/countries').subscribe(
      (countries:any) => {
        console.log('Countries:', countries);
        this.items= countries;
      },
      (error:any) => {
        console.error('Error fetching countries:', error);
      }
    );

    this.http.get<string[]>('/api/skills').subscribe(
      (skills:any) => {
        console.log('Skills:', skills);
      },
      error => {
        console.error('Error fetching skills:', error);
      }
    );
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
}