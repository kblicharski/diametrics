import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RestService } from "../../api/rest.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [RestService]
})
export class HistoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
