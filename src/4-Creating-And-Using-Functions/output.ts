import { productsURL } from '../lib';

const prefix = '🐉 ';
export default async function updateOutput(id: string)
{
  //TODO
}

runTheLearningSamples();

function runTheLearningSamples(){
  function displayProductInfo(id: number, name: string){
    console.log(`${prefix} typed parameters`);
    console.log(`product id = ${id} and name = ${name}`);
  }
    displayProductInfo(10, 'Pizza');  
}

console.log(`${prefix} function declaration`);
console.log(addNumbersDeclaration(3,4));

function addNumbersDeclaration(x:number, y:number) : number
{
  const sum: number = x+y;
  return sum;
}

const addNumberExpression = function(x:number, y:number)
{
  const sum: number = x+y;
  return sum;
}

console.log(`${prefix} function expression`);
console.log(addNumberExpression(3,4));

const sampleProducts = [
  {
    id : 10,
    name : 'Pizza',
    icon : 'fas fa-pizza-slice'
  },
  {
    id : 20,
    name : 'Ice-Cream',
    icon : 'fas fa-ice-cream'
  }
];

function getProductNames() {
  return sampleProducts.map((p) => p.name);
}