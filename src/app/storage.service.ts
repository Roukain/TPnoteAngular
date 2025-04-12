import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.models';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  loaded : boolean = false;
  tags: Tag[] = [];
  tagsDurs : Tag[] = [
    {'name' : "Oui", 'color' : "#333333", 'id' :1},
    {'name' : "Non", 'color' : "#111111", 'id' :2}
    ];

  constructor() {

  }

  loadTags(){
    return this.tags;
    //return this.tagsDurs;
  }

  saveTags(tags : Tag[]){
    this.tags = tags;
    localStorage.setItem("tags",JSON.stringify(tags))
  }
}
