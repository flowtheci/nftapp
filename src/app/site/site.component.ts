import {Component, Input, OnInit} from '@angular/core';
import particles from '../../config/particles.json';
declare let AOS: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  particles: any = particles;
  headerOptions: string[] = ['Home', 'About', 'Roadmap', 'Team', 'FAQ'];

  // color: 6D84F8


  constructor() {
    console.log(AOS);
  }

  ngOnInit(): void {
    AOS.init();
    console.log(AOS);
  }

  log(item: any) {
    console.log(item);
  }

  scrollToElement($element: HTMLElement): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  scroll(header: string) {
    header = header.toLowerCase();
    const element = document.getElementById(header);
    console.log(element);
    element ? this.scrollToElement(element) : null;
  }


}
