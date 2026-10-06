
to get the program run git clone """

to run the program 

install dependence with npm install

the back  ---> npm start

the front npm run dev

the goal is to have a system that manege alerts of users 
the system need to get an alert and put it in the DB and to giv it back to authorized users
and also to delete or edit an alert
it manege their location and level of criticality and more 



both db's can be boused in this case for  both users and alerts 
I chose "mongoDb" to use for the use of lists ond more complect data structure which is possible in sql but not so good to manage and efficient so in alert that can be more complect I used mongo 
in users which is more row data I boused supabase and a unique id verified

the system backend is build in five layers

server middleware  condolers  service and dal

notice . the reason for status codes will be explain in the code with a note  

notice . to get admin accuse active route api/auth/createadmin ,  it will create admin , do it first so it ill be in id 1. 

in every layer except for middleware the function name will end with the name of the layer to make it easy to interact and locate it 

( I wrote alarm sometimes instead of alert so pleas ignore it )

the program run on 11 endpoints all start with /api

get("/alerts") to get all alert 

get("/alerts/:id") to get one by id

post("/alerts") to add new alert

delete("/alerts") delete an alert 

put("/alerts/:id") and editing an alert



router.post("auth/createadmin") create a new admin , use in start of program

router.post("auth/register") reacquire authorize admin after login , register a new user   

router.post("auth/login") log in to the system

router.get("auth/me" ) reacquire authorize user after login, return hes full details

router.get("auth/users" ) reacquire authorize admin after login, return all user to admin

router.delete("auth/users/id" ) reacquire authorize admin after login, delete a user from db users


