import { Component, input} from '@angular/core';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  note = input<Note>();
}
