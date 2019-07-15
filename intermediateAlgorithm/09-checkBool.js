/* Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.*/

function booWho(bool) {
  return typeof bool === 'boolean' || 
          (typeof bool === 'object' && typeof bool.valueOf() === 'boolean');
}

booWho(false);
