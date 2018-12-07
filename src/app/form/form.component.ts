import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

//Library for Dialogs
import Swal from "sweetalert2";

@Component({
  selector: "form-print",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  //Editor DATA
  title = new FormControl("", [Validators.required]);
  body = new FormControl("", [Validators.required]);

  @Output() filled = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit() {}

  //reset Function
  reset() {
    if (this.title.valid || this.body.valid) {
      //Open Dialog with Sweetalert2
      Swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, reset it!"
      }).then(result => {
        if (result.value) {
          //Reset all form values
          this.title.setValue("");
          this.body.setValue("");
          Swal("Deleted!", "All resetted", "success");
        }
      });
    }
  }

  //print function
  print() {
    this.filled.emit([this.title.value, this.body.value]);
  }
}
