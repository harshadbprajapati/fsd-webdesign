// script1.js
// We cannot change message (let declaration)
// outside module (let has block (module) scope)
let message = 'Hello'
export default function greet(name) {
    console.log(`${message}, ${name}!`);
}

export { message };

