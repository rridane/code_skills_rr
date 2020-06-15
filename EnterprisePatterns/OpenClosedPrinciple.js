let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
})

class Product {
    constructor(name, color, size){
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

// The open closed principle : Open for Extension but close for modification
// Il s'agit du state space explosion, on peut ajouter autant de methodes que de filtres inimaginables$
// C'est sans fin
class ProductFiler{
    filterByColor(products, color)
    {
        return products.filter(p => p.color === color)
    }

    filterBySize(products, size)
    {
        return products.filter(p => p.size === size)
    }
}
//
// Specification

class ColorSpecification{
    constructor(color){
        this.color = color;
    }

    isSatisfied(item){
        return item.color === this.color;
    }
}


class SizeSpecification{
    constructor(size){
        this.size = size;
    }

    isSatisfied(item){
        return item.size === this.size;
    }
}

class BetterFilter
{
    filter(items, spec)
    {
        return items.filter(x => spec. isSatisfied(x));
    }
}

let bf = new BetterFilter();

console.log('Green products (new) : ');
for(let p of bf.fil)
{

}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('Apple', Color.blue, Size.large);


let products = [apple, tree, house];

let pf = new ProductFiler();
console.log('Green products (old)');

for(let p of pf.filterByColor(products, Color.green))
{
    console.log(`* ${p.name} is green`)
}