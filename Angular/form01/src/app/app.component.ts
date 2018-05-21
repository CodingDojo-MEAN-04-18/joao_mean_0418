import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Registration';
  user: User = new User();
  idnum: number = 0;
  users: User[] = [];
  reg_name: string = '';
  reg_email: string =  '';
  reg_addr: string = '';

  onSubmit(event: Event, formData: NgForm) {
    event.preventDefault();
    console.log('onSubmit form:', formData);
    console.log('onSubmit user:', this.user);
    // console.log("form valid? ", formData.valid);
    if (formData.valid) {
      this.reg_name = this.user.first_name;
      this.reg_email = this.user.email;
      this.reg_addr = `${this.user.streetaddr1} ${this.user.streetaddr2} ${this.user.city}, ${this.user.state}`;
      this.user.id = this.idnum;
      this.idnum++;
      this.users.push(this.user);
      console.log('users array:', this.users);
      this.user = new User();
      formData.reset();

    } else {
      this.reg_name = '';
      this.reg_email = '';
      this.reg_addr = '';
    }
  }
}