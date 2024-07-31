// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpResponse
// } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { delay } from 'rxjs/operators';

// @Injectable()
// export class ApiInterceptor implements HttpInterceptor {
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     if (request.url.endsWith('/api/countries')) {
//       const countries = [
//         "Canada",
//         "Brazil",
//         "Japan",
//         "South Africa",
//         "France",
//         "Italy",
//         "India",
//         "Mexico",
//         "Spain",
//         "Russia",
//         "Vietnam",
//         "Egypt",
//         "Thailand",
//         "Argentina",
//         "Greece"
//       ];
//       return of(new HttpResponse({ status: 200, body: countries })).pipe(delay(500)); 
//     } else if (request.url.endsWith('/api/skills')) {
//       const skills = [
//         "JavaScript",
//         "TypeScript",
//         "Angular",
//         "React",
//         "Vue.js",
//         "Node.js",
//         "Python",
//         "Java",
//         "C#",
//         "PHP"
//       ];
//       return of(new HttpResponse({ status: 200, body: skills })).pipe(delay(500)); 
//     }else if (request.url.endsWith('/api/structure')) {
//       const dataForForm = [
//         {
//           "label": "Username",
//           "fieldType": "textbox",
//           "required": true,
//           "disabled": false,
//           "dataKey": "username",
//           "placeholder": "Enter Username",
//           "defaultValue": "",
//           "tooltip": "Your desired username",
//           "url": ""
//         },
//         {
//           "label": "Country",
//           "fieldType": "singleDropdown",
//           "required": true,
//           "disabled": false,
//           "dataKey": "country",
//           "placeholder": "Select Country",
//           "defaultValue": "",
//           "tooltip": "Select your country",
//           "url": "/api/countries"
//         },
//         {
//           "label": "Nationality",
//           "fieldType": "singleDropdown",
//           "required": true,
//           "disabled": false,
//           "dataKey": "nationality",
//           "placeholder": "Select Nation",
//           "defaultValue": "",
//           "tooltip": "",
//           "url": "/api/countries"
//         },
//         {
//           "label": "Address",
//           "fieldType": "textbox",
//           "required": false,
//           "disabled": false,
//           "dataKey": "address",
//           "placeholder": "Enter Address",
//           "defaultValue": "First house in the street",
//           "tooltip": "Your Address for communication",
//           "url": ""
//         },
//         {
//           "label": "Skills",
//           "fieldType": "multiDropdown",
//           "required": true,
//           "disabled": false,
//           "dataKey": "skills",
//           "placeholder": "Select Skills",
//           "defaultValue": "",
//           "tooltip": "Your professional skills",
//           "url": "/api/skills"
//         },
//         {
//           "label": "Functions",
//           "fieldType": "multiDropdown",
//           "required": false,
//           "disabled": false,
//           "dataKey": "functional",
//           "placeholder": "Select Functions",
//           "defaultValue": "",
//           "tooltip": "Your professional functions",
//           "url": "/api/skills"
//         },
//         {
//           "label": "Postal code",
//           "fieldType": "textbox",
//           "required": true,
//           "disabled": false,
//           "dataKey": "pincode",
//           "placeholder": "Enter pincode",
//           "defaultValue": "112200",
//           "tooltip": "Your Address for communication",
//           "url": ""
//         },
      
//       ]
//       return of(new HttpResponse({ status: 200, body: dataForForm })).pipe(delay(500)); 
//     }
//     return next.handle(request);
//   }
// }











import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/api/countries')) {
      const countries = [
        "Canada",
        "Brazil",
        "Japan",
        "South Africa",
        "France",
        "Italy",
        "India",
        "Mexico",
        "Spain",
        "Russia",
        "Vietnam",
        "Egypt",
        "Thailand",
        "Argentina",
        "Greece"
      ];
      return of(new HttpResponse({ status: 200, body: countries })).pipe(delay(500)); 
    } else if (request.url.startsWith('/api/skills')) {
      const skills = [
        "JavaScript",
        "TypeScript",
        "Angular",
        "React",
        "Vue.js",
        "Node.js",
        "Python",
        "Java",
        "C#",
        "PHP",
        "Ruby",
        "Go",
        "Swift",
        "Kotlin",
        "SQL",
        "NoSQL",
        "GraphQL",
        "REST",
        "SASS",
        "LESS"
      ];

      const url = new URL(request.url);
      const page = parseInt(url.searchParams.get('page') || '1', 10);
      const limit = parseInt(url.searchParams.get('limit') || '10', 10);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedSkills = skills.slice(startIndex, endIndex);

      return of(new HttpResponse({ status: 200, body: paginatedSkills })).pipe(delay(500)); 
    } else if (request.url.endsWith('/api/structure')) {
      const dataForForm = [
        {
          "label": "Username",
          "fieldType": "textbox",
          "required": true,
          "disabled": false,
          "dataKey": "username",
          "placeholder": "Enter Username",
          "defaultValue": "",
          "tooltip": "Your desired username",
          "url": ""
        },
        {
          "label": "Country",
          "fieldType": "singleDropdown",
          "required": true,
          "disabled": false,
          "dataKey": "country",
          "placeholder": "Select Country",
          "defaultValue": "",
          "tooltip": "Select your country",
          "url": "/api/countries"
        },
        {
          "label": "Nationality",
          "fieldType": "singleDropdown",
          "required": true,
          "disabled": false,
          "dataKey": "nationality",
          "placeholder": "Select Nation",
          "defaultValue": "",
          "tooltip": "",
          "url": "/api/countries"
        },
        {
          "label": "Address",
          "fieldType": "textbox",
          "required": false,
          "disabled": false,
          "dataKey": "address",
          "placeholder": "Enter Address",
          "defaultValue": "First house in the street",
          "tooltip": "Your Address for communication",
          "url": ""
        },
        {
          "label": "Skills",
          "fieldType": "multiDropdown",
          "required": true,
          "disabled": false,
          "dataKey": "skills",
          "placeholder": "Select Skills",
          "defaultValue": "",
          "tooltip": "Your professional skills",
          "url": "/api/skills"
        },
        {
          "label": "Functions",
          "fieldType": "multiDropdown",
          "required": false,
          "disabled": false,
          "dataKey": "functional",
          "placeholder": "Select Functions",
          "defaultValue": "",
          "tooltip": "Your professional functions",
          "url": "/api/skills"
        },
        {
          "label": "Postal code",
          "fieldType": "textbox",
          "required": true,
          "disabled": false,
          "dataKey": "pincode",
          "placeholder": "Enter pincode",
          "defaultValue": "112200",
          "tooltip": "Your Address for communication",
          "url": ""
        },
      ];
      return of(new HttpResponse({ status: 200, body: dataForForm })).pipe(delay(500)); 
    }
    return next.handle(request);
  }
}
