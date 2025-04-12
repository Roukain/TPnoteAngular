import { Tag } from "./tag.models";

export class Note {
    'id':number;
    'title':string;
    'content':string;
    'tags':Tag[];

    constructor(id:number, title:string, content:string, tags:Tag[]){
        this.id=id;
        this.title=title;
        this.content=content;
        this.tags=tags;
    }
}
