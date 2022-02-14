import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  content = [
    {header: 'Q1 2022', id: 1, text: '• Lorem ipsum dolor sit amet, consectetur adipiscing\n• Sed do eiusmod tempor incididunt ut labore et'},
    {header: 'Q2 2022', id: 2, text: '• Lorem ipsum dolor sit amet, consectetur adipiscing\n• Sed do eiusmod tempor incididunt ut labore et'},
    {header: 'Q3 2022', id: 3, text: '• Lorem ipsum dolor sit amet, consectetur adipiscing\n• Sed do eiusmod tempor incididunt ut labore et'},
    {header: 'Q4 2022', id: 4, text: '• Lorem ipsum dolor sit amet, consectetur adipiscing\n• Sed do eiusmod tempor incididunt ut labore et'},
    {header: 'Q1 2023', id: 5, text: '• Lorem ipsum dolor sit amet, consectetur adipiscing\n• Sed do eiusmod tempor incididunt ut labore et'},
    {header: 'Q2 2023', id: 6, text: '• Lorem ipsum dolor sit amet, consectetur adipiscing\n• Sed do eiusmod tempor incididunt ut labore et'},
  ]

  constructor() { }

  ngOnInit() {
  }

  sideSwitcher(id: number): string {
    return id % 2 == 1 ? 'container left' : 'container right'
  }

}
