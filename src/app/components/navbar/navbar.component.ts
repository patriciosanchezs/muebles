import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titulo: string;

  constructor() {
    this.titulo = 'muebles emily & ximena';
   }

  ngOnInit(): void {
  }

}
