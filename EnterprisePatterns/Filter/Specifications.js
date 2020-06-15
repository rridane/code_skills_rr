import AbstractSpecification from 'AbstractSpecification';

class ColorSpecification extends AbstractSpecification {
    constructor(color){
        super();
        this.color = color;
    }

    isSatisfied(item){
        return item.color === this.color;
    }
}


class SizeSpecification extends AbstractSpecification {
    constructor(size){
        super();
        this.size = size;
    }

    isSatisfied(item){
        return item.size === this.size;
    }
}


class AndSpecification extends AbstractSpecification
{
    constructor(...specs){
        super();
        this.specs = specs;
    }

    isSatisfied(item)
    {
        return this.specs.every(x => x.isSatisfied(item));
    }
}

export default {
    ColorSpecification,
    SizeSpecification,
    AndSpecification
}
