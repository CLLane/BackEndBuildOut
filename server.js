const express = require("express");
//Here we are importing the express framework.
const app = express();
//Here we are assigning the invocation of express to the variable app so we can utilize it else where in the file.
const environment = process.env.NODE_ENV || "development";

const configuration = require("./knexfile")[environment];

const database = require("knex")(configuration);

app.set("port", process.env.PORT || 3000);

app.locals.title = "BYOB";
//We have declared that the title of our project is BYOB

app.use(express.json());

app.listen(app.get("port"), () => {
  //Above we are telling express (via the global app) to listen to the port
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  //Above we are writing a string to the console where the title and port are interperlated
  );
});

app.get("/", (request, response) => {
//We have declared that that this is an GET request and given it the path of '/' and a callback function to create an endpoint.
  return response.send(
    "Hey its time to figure out who went where and some stats"
  );
//We are returning a string that we send to the dom upon the loading of the above mentioned path.
});

app.get("/api/v1/colleges", (request, response) => {
//We have declared another GET request and given it the path of '/api/v1/colleges' and a callback function to create an endpoint.
  database("colleges")
//Here we tell the computer to look for the database colleges
    .select()
//Here we tell it to 'select'/return all the data in the table, and at this point the data is a promise. 
    .then(colleges => {
      response.status(200).json(colleges);
//Within this .then we are taking the return value from above and assigning it to 'colleges' as an arguement in the function.  Then we are tell the computer to respond with the status code 200 and the data stored in colleges in json formating. 
    })
    .catch(error => {
//We are utilizing a .catch so that if there is an error in the above chain of code the computer will catch it.
      response.status(500).json({ error });
//If there is an error the computer will respond with the status code 500 and the error itself in json formating. 
    });
});

app.get("/api/v1/players", (request, response) => {
//Yet again we are declaring a GET request and assigning it a path of '/api/v1/players' and a callback function to create an endpoint.
  database("players")
//This time however we are asking the computer to find the database called players
    .select()
//Once again we are using .select to return/select all the data within the players table
    .then(players => {
//We are taking the data that was returned from the select method above and assigning it to the value of players.
      response.status(200).json(players);
//Within this .then we are telling the computer to respond with the status code 200 and the data stored as players in json formating.
    })
    .catch(error => {
//We are utilizing a .catch so that if there is an error in the above chain of code the computer will catch it.
      response.status(500).json({ error });
//If there is an error the computer will respond with the status code 500 and the error itself in json formating. 
    });
});

app.get("/api/v1/players/:id", (request, response) => {
//Another GET request is being declared here and given the path of '/api/v1/players/:id' (the :id is what signifies that this is a dynamic path that takes in a player id as the last value in the path). We give it a callback function to create an endpoint. 
  database("players")
//We are again asking the computer to find the players table.
    .where("id", request.params.id)
//Here we are asking the computer to locate the id column withing the players table, and the second arguement is utilizing the request parameter to pull the id out of the request url. The where as a whole will find the specified column (id) and find the value that matches the second arguement (the id from the request path).
    .select()
//The .select this time is not going to select all the <tr></tr> from the table but only the ones that satisfy the conditions expressed it the above .where statement. (There should only be one in this case)
    .then(players => {
//We are taking the data we recieved from the .select and assigning it to the value of players.
      if (players.length) {
//Here we check to see if the players value has a length (if it exists) and if it does we will run the code below. 
        response.status(200).json(players);
//If the condition is met we ask the computer to respond with a 200 level status code and the data stored in players in json format. 
      } else {
//If the condition above is not met we will run the code below, but if the condition above is met we will skip this block of code.
        response.status(404).json({
          error: `Could not find a player with id ${request.params.id}`
        });
//If we do run the code above we are asking the computer to respond with a 404 status code and a json object with an error that alerts the user we could not find a player with an id matching the one they entered in the request.
      }
    })
    .catch(error => {
//We are utilizing a .catch so that if there is an error in the above chain of code the computer will catch it.
      response.status(500).json({ error });
//If there is an error the computer will respond with the status code 500 and the error itself in json formating. 
    });
});

app.get("/api/v1/colleges/:id", (request, response) => {
//Here we go again with another GET request with a dynamic path of '/api/v1/colleges/:id'
  database("colleges")
//This time we are asking the computer to find the colleges table.
    .where("id", request.params.id)
//and search for the id column for a value that matches the id value declared in the request.
    .select()
//We are asking the computer to select all the <tr></tr> that satisfy the conditional in our .where statement. (should only be one)
    .then(colleges => {
//We are taking the data we recieved from the .select above and assigning it to the value of colleges
      if (colleges.length) {
//This conditional is checking to see if the value of colleges has a length/exists if it does then we will run the code below. If not we will skip the below code and go directly to the else block.
        response.status(200).json(colleges);
//We are asking the computer to respond with a 200 level status code and the data we stored as colleges in json format. 
      } else {
//If the condition above is not satisfied we will run the code below. If the condition above was satisfied we will skip this block of code. 
        response.status(404).json({
          error: `Could not find a college with id ${request.params.id}`
        });
//We are asking the computer to respond with a 404 level error code and a json object that contains a error key with the value of a string telling the user that the id passed in the request does not have a corresponding <tr></tr> within the college table.
      }
    })
    .catch(error => {
//We are utilizing a .catch so that if there is an error in the above chain of code the computer will catch it.
      response.status(500).json({ error });
//If there is an error the computer will respond with the status code 500 and the error itself in json formating. 
    });
});

app.post("/api/v1/colleges", (request, response) => {
//Okay so once again we are creating an endpoint but this time it is for a POST request (we know that because app.post) and we are giving it the path '/api/v1/colleges' and a call back function.
  const college = request.body;
//Within a post request there is a body and we are accessing the request body via dot notation and assigning it to the value of college.
  for (let requiredParameter of ["college"]) {
//Here we are iterrating through (via a for of loop) and for each iterration we are assigning the value of that iterration to requiredParameter.  The for of loop is iterrating over the hard coded array with college at index 0.  
    if (!college[requiredParameter]) {
//This is a conditional that is asking does the request.body (college) contain the current iterrations value. If it doesnt the code below will be ran. 
      return response.status(422).send({
        error: `Expected format: { college: <String> }. You're missing a "${requiredParameter}" property.`
      });
//Asking the computer to respond with a 422 status code and send an error to the user that explains the missing parameter, and exit the function via a return statement. 
    }
  }
  database("colleges")
//Hey computer find the table colleges.
    .insert(college, "id")
//take the value of college and create a <tr></tr> with the information (i.e. the request.body), and return the value 'id' of the <tr></tr> you create. 
    .then(college => {
//Remember that 'id' value you returned in the .insert method well now that value is set to college;
      response.status(201).json({ id: college[0] });
//We are now asking the computer to respond with a status code 201 and a json object with the key id and the integer returned above and reassigned to college. The reason we are taking the 0 index of college is because the insert will return data in an array and the first (and only number) is the one we want. 
    })
    .catch(error => {
//We are utilizing a .catch so that if there is an error in the above chain of code the computer will catch it.
      response.status(500).json({ error });
//If there is an error the computer will respond with the status code 500 and the error itself in json formating.
    });
});

app.post("/api/v1/players", async (request, response) => {
//Again we are creating a POST request we are declaring this function async however because we are going to make a call to another table. 
  const player = request.body;
//We are assigning the request.body the value of player
  const collegeID = await database("colleges")
    //We are assigning the value of collegeID to the return value of the following lines. We are within an async function block so we are using an await to make sure we resolve this line before moving onto the next one. We are asking the computer to find the colleges table.
    .where("college", "like", `%${player.college_id}%`)
    //and telling it to find the column entitled 'college'. The "like" is telling the computer to compare/find any row within the college column that has a value which matches the third arguement (`%${player.college_id}%`).  We are taking the value of the key of college_id from the request.body via player. (The % signs are telling the computer anything can come before or after the value of player.college_id but just make sure that value exists)
    .first();
    //Much like select .first returns only the first value that satisfies the conditional in our .where method and assigning it to the value collegeID
  const playerToInsert = { ...player, college_id: collegeID.id };
  //Here we are creating a object called playerToInsert by spreading player (the request.body) and adding a key value pair called college_id with the value of collegeID.id which we created above.  
  for (let requiredParameter of [
    "name",
    "position",
    "height",
    "weight",
    "birth_date",
    "college_id",
    "year_start",
    "year_end"
  ]) 
  //Once again we have a for of loop that is iterrating through an array of each of the requiredParameters for the request body.
  {
    if (!player[requiredParameter]) {
  //We are checking here that the value does exist in the request body and if it does we will skip this block of code. 
      return response.status(422).send({
        error: `Expected format: 
        { name: < String >, position: < String >, height: < String >, weight: < String >, birth_date: < String >, college_id: < String > year_start: < String >, year_end: < String > } You're missing a "${requiredParameter}" property.`
      });
  //If the value does not exist the computer will respond with a 422 status code and send an object with the key of error and the value of a string that tells the user what is missing from the request.body.
    }
  }
  database("players")
  //Hey Computer Dude find me a table with the title 'players'
    .insert(playerToInsert, "id")
  //Hey Computer Dued take the palyerToInsert variable I declared earlier and please kindly insert it into the 'players' table and return to me the 'id' value of the <tr></tr> you just created. 
    .then(player => {
  //Do you remember the id you returned so kindly just a line before, well now we are gonna call that value player. 
      response.status(201).json({ id: player[0] });
  //Can you, Mr. Computer Person, please respond to this POST request with a 201 status code an in a json object return the key of id with the value of index 0 of player. 
    })
    .catch(error => {
//We are utilizing a .catch so that if there is an error in the above chain of code the computer will catch it.
    response.status(500).json({ error });
//If there is an error the computer will respond with the status code 500 and the error itself in json formating.
    });
});

app.delete("/api/v1/players/:id", (request, response) => {
//This is our final request and it is a DELETE there is no body requirement but you will notice that the path we have created is dynamic.  Similar to previous dynamic paths the :id will take an integer value and that integer should match the id of the player you want deleted. 
  database("players")
//Hello for the last time Computer, for old times sake can you find me the players table. 
    .where("id", request.params.id)
//and within that table can you please find a <tr></tr> within the column id that has a value that matches the id entered in the endpoint path.
    .del()
//And delete it from existence and send me an object that lets me know you successfully deleted the <tr></tr>
    .then(success => {
//The object returned from the .del() we are now calling success
      if (success) {
//If the success object exists (i.e. isnt undefined) run the code below.
        response.status(200).send(`The player was deleted`);
//Respond with a 200 level staus code and send a string letting the user know the player is gone from the table. 
      } else {
//If the success object is non-existent or undefind run the code below.
        response.status(404).json({
          error: `Could not find a player with id ${request.params.id}`
        });
//So you couldnt find what I wanted please respond to the user by giving a 404 status code and an error message that tells them there is not a player with the specific id.
      }
    })
//We are utilizing a .catch so that if there is an error in the above chain of code the computer will catch it.
.catch(err => {
  response.status(500).json(err);
});
//If there is an error the computer will respond with the status code 500 and the error itself in json formating.
});
