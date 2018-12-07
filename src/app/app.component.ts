import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "simple-text-editor";
  text_title = "";
  text_body = "";

  printed(content: string[]) {
    this.text_title = content[0];
    //tags are converted
    this.text_body = content[1]
      .replace(new RegExp(/\[\/i\]/, "g"), "</i>")
      .replace(new RegExp(/\[i\]/, "g"), "<i>")
      .replace(new RegExp(/\[\/b\]/, "g"), "</b>")
      .replace(new RegExp(/\[b\]/, "g"), "<b>");
  }
}
