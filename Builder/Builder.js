import Tag from './Tag';

export class HtmlBuilder{
   constructor(rootName)
   {
       this.root = new Tag(rootName);
       this.rootName = rootName;
   }
}

console.log(Tag);

let builder = Tag.create('ul');


console.log(builder);

