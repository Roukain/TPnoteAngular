import { Component, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  name = input<string>('DefaultTag');
  color = input<string>("#888888");
  id = input<number>(0);

  @Output() delete = new EventEmitter<number>(); 

  supprimer() {
    this.delete.emit(this.id());
  }
}
