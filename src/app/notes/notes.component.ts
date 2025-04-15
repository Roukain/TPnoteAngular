import { Component } from '@angular/core';
import { Note } from '../../models/note.model';
import { StorageService } from '../storage.service';
import { FormsModule } from '@angular/forms';
import { Tag } from '../../models/tag.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [FormsModule, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  notes : Note[] = []
  editing : Note | null = null;
  tags : Tag[] =[]
  newTagName: string = '';

  constructor(private storage : StorageService){}

  ngOnInit() : void{
    this.notes = this.storage.loadNotes();
    this.tags = this.storage.loadTags();
  }

  supprimerNote(id :number){
    this.notes = this.notes.filter(note => note.id !== id);
    this.storage.saveNotes(this.notes);
  }

  nouvelleNote(){
    this.editing = {id : 0, title:'', content :'', tags : [], isList:false,color:'#DDDDDD'}
  }

  editerNote(note : Note){
    this.editing = {...note};
  }

  annulerEdition(){
    this.editing = null;
  }

  enregistrerNote(){
    //vérifier si la note est en cours d'édition
    if(!this.editing) return;

    //On regarde si l'on crée ou si l'on modifie une note
    if(this.editing.id === 0){
      //Ici on créé
      this.editing.id = Date.now();
      this.notes.push(this.editing);
    }
    else{
      //ici on modifie
      const index = this.notes.findIndex(n => n.id === this.editing!.id);
      //On utilise une fonction lambda pour récupérer l'id de la note à modifier
      if (index !== -1) this.notes[index] = this.editing;
    }

    this.storage.saveNotes(this.notes);
    this.annulerEdition();
  }

  toggleTag(tag: Tag) {
    if (!this.editing) return;
  
    const exists = this.editing.tags.some(t => t.id === tag.id);
    if (exists) {
      this.editing.tags = this.editing.tags.filter(t => t.id !== tag.id);
    } else {
      this.editing.tags.push(tag);
    }
  }

  ajouterTag(){
    if (this.newTagName.trim()==='') return;

    const newTag : Tag = {
      id : Date.now(),
      name : this.newTagName.trim(),
      color : '#888888'
    };

    this.tags.push(newTag);
    this.storage.saveTags(this.tags);

    if(this.editing){
      this.editing.tags.push(newTag);
    }

    this.newTagName ='';
  }
}
