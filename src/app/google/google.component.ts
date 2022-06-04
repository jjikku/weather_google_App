import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../services/google.service';
import { googleData } from '../models/google.model';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  searchItem: string="ICT Academy Kerala";
  googleData?:any;
  constructor(private googleService: GoogleService) {}

  ngOnInit(): void {
    this.Search(this.searchItem);
    this.searchItem = "";

  }
  onSearch() {
    this.Search(this.searchItem);
    this.searchItem = "";
  }

  private Search(searchItem: string){
    this.googleService.getGoogleData(searchItem)
      .subscribe((response) => {

          this.googleData = response.results;
          console.log(response.results);
          console.log(this.googleData);
          console.log(typeof(this.googleData));
          console.log(JSON.stringify(response.results));
          console.log(typeof((JSON.stringify(response.results))));
        }
      )
  }
}
