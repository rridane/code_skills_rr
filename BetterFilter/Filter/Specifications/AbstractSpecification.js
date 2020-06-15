class AbstractSpecification
{
    constructor(props) {
        if(this.constructor.name === 'AbstractSpecification')
        {
            throw new Error('AbstractSpecification is Abstract');
        }
    }

    isSatisfied(item){}
}

export default AbstractSpecification;
