# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
	- The foreign key would have the name:  ' animal_id '
	- The foreign key would be a part of the ' Sightings ' model

  Researched answer:
	- If a model (Model A) has many of another model (Model B),  the foreign key will be placed inside the database of Model B with the name and datatype 'model_a_id:integer'



2. Which routes must always be passed params and why?

  Your answer:
	- show
	- delete
	- *create       ( depends if a 'nil' value is acceptable )

  Researched answer:
	- same as above, and 'nil' is typically unacceptable.  It should be replaced by something else to communicate that data has been entered.



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:
	
	GET  '/games/:guess'  =>  'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer:

	- " rails generate model Animal "  =  Creates a database model called Animal.
	- " rails generate resource Animal "  =  Creates a resource, which includes routes for every method ( inside the controller ),  and a model called Animal for our  database.
	- " rails generate controller Animal "  =  Creates a controller, and inside of this you can place your routes for each HTTP verb.

  Researched answer:
	- For these three commands, the previous answer is correct.
	->  Rails will make sure, in the background, that the files can be created and generate migrations along side those that need it.
	
	- migration, model, controller, resource



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   
	- This retrieves every entry from the database (index method)
	- index, show all

/users/1      method="GET"   
	- This retrieves ONE entry from the database (show method)
	- show, show one

/users/new    method="GET"   
	- Allows someone to enter all the information needed to create an entry in the databae through the use of forms, or other input methods (inside the ' new.html.erb ' file )   (new method)
	- new, show form

/users/       method="POST"     
	- Using the JSON provided to it, this will create a new entry in the ' User ' model.  (create method)
	- create, submitting form

/users/1      method="PUT"    
	- Update/edit ONE specific entry with the given id.   (update method)
	- update, change num 1

/users/1      method="DELETE"
	- Delete (destroy)ONE specific entry with the given id.   (destroy method)
	- destroy, delete


