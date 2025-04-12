import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsComponent } from './tags/tags.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP Noté Angular';
}
