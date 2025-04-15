import { Tag } from "./tag.models";

export class Note {
    'id':number;
    'title':string;
    'content':string;
    'tags':Tag[];
    'isList':Boolean = false;
    'color':string;

    constructor(id:number, title:string, content:string, tags:Tag[], isList:Boolean, color:string){
        this.id=id;
        this.title=title;
        this.content=content;
        this.tags=tags;
        this.isList = isList;
        this.color = color;
    }
}
