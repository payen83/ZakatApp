import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.newsList = [
      { title: "Card News", image: "assets/shapes.svg", body: "Cards are a standard piece of UI that serves as an entry point to more detailed information. A card can be a single component, but is often made up of some header, title, subtitle, and content." },

      { title: "Slides News", image: "assets/shapes.svg", body: "The Slides component is a multi-section container. Each section can be swiped or dragged between. It contains any number of Slide components." },

      { title: "Select News", image: "assets/shapes.svg", body: "Selects are form controls to select an option, or options, from a set of options, similar to a native <select> element. When a user taps the select" }
    ];

  }

  ngOnInit() {
    console.log(this.newsList);
  }

}
