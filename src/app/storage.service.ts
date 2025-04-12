import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.models';
import { Note } from '../models/note.model';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  loaded : boolean = false;
  tags: Tag[] = [];
  notes: Note[] = [];

  constructor() {

  }

  loadTags(){
    if (!this.loaded) {
      const data = localStorage.getItem('tags');
      if (data) this.tags = JSON.parse(data);
      this.loaded = true;
    }
    return this.tags;
  }

  saveTags(tags : Tag[]){
    this.tags = tags;
    localStorage.setItem("tags",JSON.stringify(tags))
  }

  loadNotes(): Note[] {
    const data = localStorage.getItem('notes');
    if (data) {
      this.notes = JSON.parse(data);
    }
    return this.notes;
  }

  saveNotes(notes: Note[]) {
    this.notes = notes;
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
