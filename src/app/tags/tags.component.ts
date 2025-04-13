import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Tag } from '../../models/tag.models';
import { TagComponent } from '../tag/tag.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';  

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
  imports:[TagComponent, FormsModule, NgIf, CommonModule]
})
export class TagsComponent implements OnInit{
  tags : Tag[]=[];
  editing : Tag | null = null;

  constructor (private storage:StorageService){}

  ngOnInit(): void {
    this.tags=this.storage.loadTags();
  }

  dialogAddTag() : boolean{
    const nom = window.prompt("Nom du tag :");
    if(nom && nom.trim() != ""){
      const nouveauTag = {
        name:nom.trim(),
        color:"#888888",
        id : Date.now()
      };

      this.tags.push(nouveauTag);
      this.storage.saveTags(this.tags);
    }
    return false;
  }

  supprimerTag(id: number) {
    this.tags = this.tags.filter(tag => tag.id !== id);
    this.storage.saveTags(this.tags);
  }

  nouveauTag() {
    this.editing = { id: 0, name: '', color: '#888888' };
  }

  editerTag(tag: Tag) {
    //Permet de modifier une copie du tag, sans modifier l'original
    this.editing = { ...tag };
  }

  annulerEdition() {
    this.editing = null;
  }

  enregistrerTag() {
    //vérifier si l'étiquette est en cours d'édition
    if(!this.editing) return

    //On regarde si l'on crée ou si l'on modifie une note
    if (this.editing) {
      if (this.editing.id === 0) {
        //Ici on créé
        this.editing.id = Date.now();
        this.tags.push(this.editing);
      } else {
        //ici on modifie
        const index = this.tags.findIndex(t => t.id === this.editing!.id);
        //On utilise une fonction lambda pour récupérer l'id de la note à modifier
        if (index !== -1) this.tags[index] = this.editing;
      }

      this.storage.saveTags(this.tags);
      this.annulerEdition();
    }
  }
}
