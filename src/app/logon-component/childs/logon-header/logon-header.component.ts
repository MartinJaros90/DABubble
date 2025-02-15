import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-logon-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './logon-header.component.html',
  styleUrl: './logon-header.component.scss'
})
export class LogonHeaderComponent implements OnInit{
  showSignup = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showSignup = this.router.url === '/logon';
    });
  }

  ngOnInit(): void {
    this.checkRoute();
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  private checkRoute(): void {
    this.showSignup = this.router.url === '/logon';
  }
}


