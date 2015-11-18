if (Meteor.isClient) {

  Template.body.helpers({
    tasks:[
      {text:"This is task1"},
      {text:"This is task2"},
      {text:"This is task3"}
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

