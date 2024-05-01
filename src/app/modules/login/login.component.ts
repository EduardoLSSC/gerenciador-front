import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({ // Criando o FormGroup junto com a declaração da variável
    email: [null],
    password: [null],
    name: [null],
    birthday: [null]
  });

  user = new User(); // Inicializando o objeto User
  listUser: User[] = []

  constructor(
    private fb: FormBuilder,
    private httpclient: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.httpclient.get<any>('http://localhost:3333/users').subscribe({
      next: (response) => {
        console.log(response)
        this.listUser = response
      }
    })
  }
  
  save() {
    this.user.email = this.form.get('email')?.value; // Atribuindo valor ao email
    this.user.password = this.form.get('password')?.value; // Atribuindo valor à password
    this.user.birthday = this.form.get('birthday')?.value;
    this.user.name = this.form.get('name')?.value;
    this.httpclient.post<any>('http://localhost:3333/users', this.user).subscribe({
      next: (response) => {
        if(response != null) {
          console.log(response)
          this.listUser.push(response)
        }
      }
    })
  }


}
