import {Component, Input, OnInit} from '@angular/core';
import particles from '../../config/particles.json';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  homeButton: string = 'Home';
  aboutButton: string = 'About';
  teamButton: string = 'Team';
  roadMapButton: string = 'Roadmap';
  faqButton: string = 'FAQ';
  particles: any = particles;
  // color: 6D84F8


  constructor() { }

  ngOnInit(): void {
  }


}
