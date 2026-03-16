Authentication :
verifying the identity of a user or system, often through credentials like passwords or tokens

Authorization: determination what actions or resources a user or system is allowed to access after authentication
Access control : the mechanism and policies that govern who can access what resources and under what conditions

Local storage: allows web application to store data locally within the users browser providing a way to persist data access sessions without needing server side storage 
meaning data remains even after the browser is closed or restart the system unless u clear cache or manually remove the data. this can be useful for storing user preferences session information or other data that needs to persist across page reload 

STORES THE DATA IN KEY VALUE PAIRS
    SYNTAX OF LOCALSTORAGE :
    SAVE DATA:
    localStorage.setItem('key','value');
    RETRIEVE DATA:
            var value = localStorage.getItem('key');
            ex: localStorage.setItem('username','john_doe');
            var username = localstorage.getItem('username');
            remove data:
            localStorage.removeItem('key');
            clear storage:
localStorage.clear(); delete all data from localStorage


why json needed?
we convert objects to string using json.stringify() to store them in localstorage, and we convert them back to
objects using json.parse() when we retrieve them . this allows us to store complex data structures like arrays and objects in localStorage,
which only supports string values.
{
    username: 'john_doe',
    email: abc@gmail.com,
    password: '1234567890'
}

JSON.stringify(): converts a javaScript object or value to a JSON string , which can be stored in localSorage.
ex:

const user = {name: "Rahul"};
JSON.stringify(user); '{name:"Rahul"}'

explanation: we have an object user with a property name . When we use JSON.stringify(user), it converts the object into a JSON string
representation, which can be stored in localStorage.

11. JSON.parse()



Json: it is a lightweight format used to write those files 

in short it is the place you save the data and json is the language tp use to write it

layer 1:
UI 
HTML FORMS COLLECT THE <INPUT></INPUT>
    LAYER 2:
    LOGIC:
        JS TO PROCESS THE DATA (VALIDATE, CHECK, STORE)

        LAYER 3:
        STORAGE
        WE MUST STORE USER DATA SOMEWHERE (LOCALSTORAGE, DATABASE, ETC)

