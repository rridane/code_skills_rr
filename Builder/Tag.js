import { HtmlBuilder } from './Builder';

export default class Tag {
    static get indentSize() { return 2 ;}

    constructor(name='', text='') {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    static create(name){
        return new HtmlBuilder(name);
    }
}
