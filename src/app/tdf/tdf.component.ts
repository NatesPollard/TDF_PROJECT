import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  standalone: false,
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
}
