import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { data } from "../../data/data";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = "";
  @Input() contentTitle: string = "";
  @Input() contentDescription: string = "";
  @Input() contentLink: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        const noticia = data.find((item) => item.id === Number(id));
        if (noticia) {
          this.photoCover = noticia.photo;
          this.contentTitle = noticia.title;
          this.contentDescription = noticia.description;
          this.contentLink = noticia.link;
        }
      }
    });
  }
}
