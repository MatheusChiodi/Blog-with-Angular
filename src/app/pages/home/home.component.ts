import { Component, OnInit } from '@angular/core';
import { data } from '../../data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noticias = data;
  constructor() { }

  ngOnInit(): void {
  }

}
