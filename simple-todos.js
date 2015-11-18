Tasks  = new Mongo.Collection("tasks");

if (Meteor.isClient) {
    // If hide completed is checked, filter tasks
    Template.body.helpers({
        tasks: function () {
            if (Session.get("hideCompleted")) {
                return Tasks.find({checked: {$ne: true}}, {sort: {createAt: -1}});
            } else {
                return Tasks.find({}, {sort: {createAt: -1}});
            }
        },
        hideCompleted: function () {
            return Session.get("hideCompleted");
        },
        incompleteCount: function () {
            return Tasks.find({checked: {$ne: true}}).count();
        }
    });

    Template.body.events({
        "submit .new-task": function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var text = event.target.text.value;

            //  Insert a task into the collection
            Meteor.call("addTask",text);

            // Clear form
            event.target.text.value = "";
        },

        "click .toggle-checked": function () {
            // Set the checked property to the opposite of its current value
            Metetor.call("setChecked",this._id, !this.checked);
        },

        "click .delete": function () {
            Meteor.call("deleteTask",this._id);
        },

        "change .hide-completed  input": function (event) {
            Session.set("hideCompleted", event.target.checked);
        }
    });

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Meteor.methods({
    addTask: function(text){
        // Make sure the user is logged in before inserting a task
        if( !Meteor.userId() ){
            throw new Meteor.Error("not-authorized");
        }

        Tasks.insert({
            text: text,
            createAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    deleteTask: function(taskId){
        Tasks.remove(taskId);
    },
    setChecked: function(taskId,setChecked){
        Tasks.update(taskId,{$set:{checked:setChecked}});
    }
});

