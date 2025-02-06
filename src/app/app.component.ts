import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistryComponent } from './registry/registry.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DaBubble';
}
