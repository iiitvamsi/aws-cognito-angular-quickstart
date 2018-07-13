import {Component, OnInit} from "@angular/core";
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router,ActivatedRoute,Params } from '@angular/router';

declare let AWS: any;
declare let AWSCognito: any;

@Component({
    selector: 'awscognito-angular2-app',
    template: '<p>Hello and welcome!"</p>',
})
export class AboutComponent {
    constructor() {
    }
}

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './landinghome.html',
    providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class HomeLandingComponent {
    public href: string = "";
    loginview:any;

    constructor(private location: Location,private router: Router) {
        console.log("URL Path:"+this.location.path()); 
        console.log("HomeLandingComponent constructor");
    }

    ngOnInit() {
        this.href = this.router.url;
        if(this.href='/home?order=undefined'){
            //window.location.href='https://studyzone.conduiraonline.com';
        }
    }
}

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

    constructor() {
        console.log("HomeComponent constructor");
    }

    ngOnInit() {
    }
}


