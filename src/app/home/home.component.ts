import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  loginInformation = {
    username: 'jesury',
    password: 'thomas',
  };

  sample = {
    test: '1',
    test2: '2',
  };

  ngOnInit(): void {
    localStorage.setItem(
      'loginInformation',
      JSON.stringify(this.loginInformation)
    );

    localStorage.setItem('sampleVariable', JSON.stringify(this.sample));
  }
}
