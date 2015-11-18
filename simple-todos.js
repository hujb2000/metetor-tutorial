Tasks  = new Mongo.Collection("tasks");

if (Meteor.isClient) {

  Template.body.helpers({
    tasks:function(){
      return Tasks.find({},{sort:{createAt:-1}});
    }
  });

  Template.body.events({
    "submit .new-task": function(event){
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      //  Insert a task into the collection
      Tasks.insert({text: text,createAt:new Date()}) // current time

      // Clear form
      event.target.text.value = "";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

