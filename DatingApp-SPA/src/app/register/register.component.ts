import { AuthService } from './../_services/auth.service';
import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe(() => {
      console.log('ok');
    }, error => {
      console.log('fail');
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancel');
  }
}
