import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.css"]
})
export class PreviewComponent implements OnInit {
  @Input("title_text") title: string;
  @Input("body_text") body: string;

  constructor() {}

  ngOnInit() {}
}
