function Bhask( 
 a,
 b,
 c) {



   let numDelta = Math.sqrt(Math.pow(b,2)-4*a*c)

   return {
    numPositivo: (-b+numDelta)/2*a,
    numNegativo: (-b-numDelta)/2*a
   }
 }

console.log(Bhask(8,10,18))