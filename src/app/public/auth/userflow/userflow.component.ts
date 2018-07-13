import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-userflow',
  templateUrl: './userflow.component.html',
  styleUrls: ['./userflow.component.css']
})
export class UserflowComponent implements OnInit {
  public href: string = "";
  constructor(public router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log("From userflow module:"+this.href);
  }

}
