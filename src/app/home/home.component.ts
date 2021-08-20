import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  listing: any;
  filtervalue: any = '?type=';

  category_listing = [
    { 'title': 'Shops','icons': 'bx-shopping-bag'},
    { 'title': 'Hotels','icons': 'bx-bed'},
    { 'title': 'Resturants','icons': 'bx-drink'},
    { 'title': 'Fitness','icons': 'bx-dumbbell'},
    { 'title': 'Events','icons': 'bx-calendar-star'},
    { 'title': 'Services','icons': 'bx-walk'},
    { 'title': 'Hospital','icons': 'bx-building-house'},
    { 'title': 'Markets','icons': 'bx-buildings'},
    { 'title': 'Others','icons': 'bx-cog'},
  ]
  constructor(private http:HttpClient,) { }

  onChange(value) {
    if(value === '') {
      this.getlists('')
    } else {
      this.getlists(this.filtervalue+value)
    }
}

  ngOnInit(): void {
    this.getlists('');
  }

  getlists(filter) {
    this.http.get<any>('http://localhost:3000/list'+filter).subscribe(resp => {
      this.listing = resp;
    },
    err => {
      console.log('err', err);
    });
  }

}
