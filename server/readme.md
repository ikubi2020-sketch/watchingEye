
to get the program run git clone """

to run the program 

install dependence with npm install

the back  ---> npm start

the front npm run dev

the goal is to have a system that manege alerts of users 
the system need to get an alert and put it in the DB and to giv it back to authorized users
and also to delete or edit an alert
it manege their location and level of criticality and more 

I chose "mongoDb" to use for the use of lists ond more complect data structure which is possible in sql but not so good to manage and efficient 

the system backend is build in five layers

server middleware  condolers  service and dal

the program run on 5 endpoints 

notice . in every layer except for middleware the function name will end with the name of the layer to make it easy to infract and locate it 

get("/alerts") to get all alert 

get("/alerts/:id") to get one by id

post("/alerts") to add new alert

delete("/alerts") delete an alert 

put("/alerts/:id") and editing an alert





