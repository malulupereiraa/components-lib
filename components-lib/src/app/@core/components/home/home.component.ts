import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  template: `
    <!-- <ngx-one-column-layout>
      <nb-menu [items]="menu" (click)="cleanFilters()"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout> -->
    <router-outlet></router-outlet>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
