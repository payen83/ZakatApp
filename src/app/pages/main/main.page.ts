import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
    autoplay: true
  };
  public newsList: Array<any>;

  constructor(public router: Router, public dataService: DataService) {
    this.newsList = [
      { title: "Card News", image: "assets/shapes.svg", body: "Cards are a standard piece of UI that serves as an entry point to more detailed information. A card can be a single component, but is often made up of some header, title, subtitle, and content." },

      { title: "Slides News", image: "assets/shapes.svg", body: "The Slides component is a multi-section container. Each section can be swiped or dragged between. It contains any number of Slide components." },

      { title: "Select News", image: "assets/shapes.svg", body: "Selects are form controls to select an option, or options, from a set of options, similar to a native <select> element. When a user taps the select" }
    ];

  }

  getSearchKeyword(ev: any) {
    //1. get keyword user type
    let val: string = ev.target.value;

    if (val && val.trim() != '') {
      //2. if input exists, set temporary data in data.service
      this.dataService.setTempData(val);
      //3.redirect to CawanganPage
      this.router.navigateByUrl('/cawangan');
    }
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    console.log(this.newsList);
  }

}
