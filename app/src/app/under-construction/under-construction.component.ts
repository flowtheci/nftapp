import { Component, OnInit } from '@angular/core';
import particlesOptions from '../../config/particles.json';


@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  particles: any = particlesOptions;


  constructor() { }

  ngOnInit(): void {
  }

}
