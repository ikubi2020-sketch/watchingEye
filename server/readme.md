
to get the program run git clone """

to run the program 

install dependence with npm install

the back  ---> npm start

the front npm run dev

the goal is to have a system that manege alerts 

it manege their location and level of criticality and more 

<!-- I chose "mongoDb" to use for the use of lists ond more complect data structure which is possible in sql but not so good to manage and efficient  -->

the program run on 5v endpoints 

notice . in every layer except fro middleware the function name will end with the name of the layer to make it ease to ineract and locate it 

get("/alert") to get all alarms 

get("/alert/:id") to get one by id

post("/alert") to add and alarm

delete("/alert") delete an alarm 

put("/alert/:id") and editing an alarm

the system backend is build in five layers

server middleware  condolers  service and dal




