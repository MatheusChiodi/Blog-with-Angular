import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-big-card",
  templateUrl: "./big-card.component.html",
  styleUrls: ["./big-card.component.css"],
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string = "";
  @Input()
  cardLink: string = "";
  @Input()
  Id: string = "0";

  constructor() {}

  ngOnInit(): void {}
}
