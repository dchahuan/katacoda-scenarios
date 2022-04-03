The api provided in VSCode are two basic applications: a calculator and a todo list. We give you the following an index.js file where a KoaJS API is instantiated. We have created a routes folder where there are 2 files. 

The first one is calculator.js, where a KoaRouter is created with 4 different routes:

<ul>
	<li>
        /(GET) add/num1/num2, that adds the two numbers given by the route params
    </li>
    <li>
        (POST) /subtract, that subtract 2 numbers given in a post request with the following body format {num1:Number, num2: Number}
    </li>
    <li>
        (POST) /multiply, that multiply 2 numbers given in a post request with the following body format  {num1:Number, num2:Number}
    </li>
    <li>
        /(POST) divide, that divide 2 numbers given in a post request with the following body format {num1:Number, num2:Number} (DO NOT DIVIDE BY 0 ;) )
    </li>
</ul>

The second one is the file todo.js where you can make the basic CRUD applications to a todo app, the routes given are the following:

<ul>
	<li>
		(GET) /todos returns every todo
    </li>
    <li>
        (POST) /todos receives a body with the format { title: string } and returns all the todos
    </li>
    <li>
        (PATCH) /todos/:id has the route param of the id and receives a body with {title: String format}
    </li>
    <li>
        (DELETE) /todos/:id has the route params of an id and returns the new todos.
    </li>
</ul>
