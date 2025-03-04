import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  domains!: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDomains().subscribe(
      data => this.domains = data
    );
  }
}