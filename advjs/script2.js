// script2.js
// Importing the greet function from script1.js
import greetPerson from './script1.js'; // default exported
import { message } from './script1.js'; // named exported
import * as mod1 from './script1.js'; // named exported

// Using the imported function
greetPerson('Tom Cruise');
console.log('The message in other module is ' + message);
console.log('The message in other module is ' + mod1.message);

