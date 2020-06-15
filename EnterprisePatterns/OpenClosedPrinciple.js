import Filter from 'Filter/Filter';
import Product from 'Product';
import AndSpecification from 'Filter/AbstractSpecification';
import ColorSpecification from 'Filter/AbstractSpecification';
import SizeSpecification from 'Filter/AbstractSpecification';

// Création des produits à filter

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('Apple', Color.blue, Size.large);

let products = [apple, tree, house];

let bf = new Filter();

console.log('Green products (new) : ');
for(let p of bf.filter(products,
        new ColorSpecification(Color.green)
    ))
{
    console.log(`* ${p.name} is green`);
}

console.log(`Large and green products`)
let specs = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
)


for(let p of bf.filter(products, specs
))
{
    console.log(`* ${p.name} is green and large`);
}

let pf = new ProductFiler();
console.log('Green products (old)');




for(let p of pf.filterByColor(products, Color.green))
{
    console.log(`* ${p.name} is green`)
}
