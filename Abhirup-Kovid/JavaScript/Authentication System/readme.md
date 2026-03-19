Authentication :
verifying the identity of a user or system, often through credentials like passwords or tokens

Authorization: determination what actions or resources a user or system is allowed to access after authentication
Access control : the mechanism and policies that govern who can access what resources and under what conditions

Local storage: allows web application to store data locally within the users browser providing a way to persist data access sessions without needing server side storage 
meaning data remains even after the browser is closed or restart the system unless u clear cache or manually remove the data. this can be useful for storing user preferences session information or other data that needs to persist across page reload 

Stores the data in key value pairs
Syntax of local storage :
save data:
localStorage.setItem('key','value');
Retrieve data:
 var value=localStorage.getItem('key');
 ex: localStorage.setItem('username','abhirup');
 var username=localStorage.getItem('username');
remove data:
 localStorage.removeItem('key');
 clear Storage:
 localStorage.clear(); deletes all data from localStorage

why json is needed?
 we convert objects to strings using json.stringify() to store them in localStorage and we can convert them back to objects using json.parse() when we retrieve them . this allows us to store complex data structures like arrays and objects which only supports string values
 for eg:
 {
    username:'Abhirup',
    email: 'abhirupkovid@gmail.com,
    password:'1234'
 }

 JSON.stringify(): converts a javascript objects or value to a json string, which can be stored in localStorage
 eg:
 const user={name: "abhirup"};
 JSON.stringify(user); // '{"name":"abhirup"}'
 Explanation:we have an object user with a property name. when we use JSON.stringify(user), it converts the object int  representation, which can be stored int he localStorage.

 JSON.parse():parses a JSON string and returns the corresponding javasrcipt object or value, allowing us to retrieve 

 SIGNUP LOGIC
 Signup Logic:

 user enter username & password
 ↓
 


Json: it is a lightweight format used to write those files 
in short it is the place you save the data and json is the language tp use to write it 

Layer 1:
UI
HTML forms Collects the <input></input>

Layer 2:
Logic :
JS to process the data (validate,check,store)

Layer 3:
Storage 
we must store user data somewhere (local storage, database,etc)


Stores the data in key value pairs
Syntax of local storage :
save data:
localStorage.setItem('key','value');
Retrieve data:
 var value=localStorage.getItem('key');
 ex: localStorage.setItem('username','abhirup');
 var username=localStorage.getItem('username');
remove data:
 localStorage.removeItem('key');
 clear Storage:
 localStorage.clear(); deletes all data from localStorage

why json is needed

