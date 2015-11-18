# Build your first Meteor App----TODO APP

1. Createing an app

meteor create simple-todos

cd simple-todos

meteor

view .gitignore

2. Templates

Everything inside <template> tags is compiled into Meteor templates, which can be include inside HTML with {{> templateName}} or referenced in your JavaScript with Template.templateName.

All of the code in your HTML files is compiled with Meteor's Spacebars comiler, Spacebars use statements surrounded by double curly braces such as {{#each}} and {{#if}} to let your  add

logic and data to your views.


3. Storing tasks in a collection

Collection are Meteor's way of storing persistent data. The special thing about collections in Meteor is that they can be access from both the server and the client,

making it easy to write view logic without having to write a lot of server code. They also update themselves automatically, so a view component backed by a collection will automatically display the most up-to-date data.

MyColleciton = new Mongo.Collection("collectionName");

meteor mongo

		db.tasks.insert({ text: "Hello world!", createdAt: new Date() });


4.  Adding tasks with a form


Event listeners are added to templates in much the same way as helpers are : by calling Template.templanteName.events(...) with a dictionary.

The keys describe the event to listen for , and the values are event handlers that are called whe the event  happens.

In ourr case above, we are listening to the submit event on any  element that matches the CSS selector .new-task.  When this event is triggered by the user pressing enter inside the input filed.

our event handler function is called.

event.target.text.value. You can see all of the other properties of the event object by adding a console.log(event) and inspecting the object in your browser console.

g