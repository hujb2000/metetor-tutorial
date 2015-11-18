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

5. Checking off and deleting tasks

Inside the event handlers, this refers to an individual task object.  In a collection. every inserted document has a unique _id filed that can be used to refer to that specific document.

We can get the _id of the current task with this._id. Once  we have the _id, we can use update and remove to modify the relevant task.

6. Deploying your app

meteor deploy hujb2000.meteor.com, fill the email: hujb2000@163.com , http://hujb2000.meteor.com

7. Running on mobile

   * Runing on an iOS

   meteor install-sdk ios

   [install-sdk ios](https://github.com/meteor/meteor/wiki/Mobile-Development-Install:-iOS-on-Mac)

   meteor add-platform ios

   meteor run ios

	meteor run  ios-device

	This will open Xcode with a project for your iOS app, Your can use Xcode to then launch the app on any device or simulator that Xcode supports.

	meteor run ios-device --mobile-server hujb2000.meteor.com



	* Runing on an android

	meteor install-sdk android

	[install-sdk android](https://github.com/meteor/meteor/wiki/Mobile-Development-Install:-Android-on-Mac)

	meteor add-platform android

	meteor run android

	meteor run android-device

	adb devices

	The App will be built and installed on your device, If you want to point your app to the server you deployed in the previous step.run:

	meteor run android-device --mobile-server hujb2000.meteor.com

Note:

		Starting with Meteor 1.2, the bundled Android tools have been removed and a system-wide install of the Android SDK is now required.

		This should make it easier to keep the development toolchain up to date and helps avoid some difficult to diagnose failures.

		 The meteor install-sdk command no longer attempts to download and install the Android tools for you (it has been deprecated and

		 just points you to these instructions).

 Note2:
    Unfortunately, the Android Studio setup wizard only downloads the most recent SDK Platform(API 23), while Cordova requires API 22. That means

     you'll have to install the Android SDK  Platform API 22 manually

     Optionally: Settin ANDROID_HOME and adding the tools directories to your PATH


8. Storing temporary UI state  in Session

  Session is a convenient place to store temporary UI state, and can be used in helpers just like a collection.

9. Adding user accounts

   meteor add accounts-ui accounts-password

   If your app has the accounts-ui package, all we have to do to add a login dropdown is  include loginButtons template with {{> loginButtons}}. This dropdown detects which login

   methods have been added to the app and displays teh appropriate  controls.

   Your can add the accounts-facebook package to enable Facebook login in your app, the Facebook button will automatically appear in the dropdown.

10. Security with methods

	The best way to do this is by declaring methods. Instead of the client code directory calling insert, update and remove,

	Every newly created Meteor project has the insecure package added by default , This is the package that allows us to edit the database from the client

	meteor remove insecure.

	When you call a method on the client using Meteor.call, two things happen in parallel:

	1. The client sends a request to the server to run the method in a secure environment, just line an AJAX request would work
	2. A simulation of the method runs directly on the client to attempt to predict the outcome of the server call using the available information.

11. Filtering daa with publish and subscribe

	meteor remove autopublish

	When the app refreshes, the task list will be empty, Without the autopublish package, we wil have to specify explicitly what the server sends to the client. Thun function

	in Meteor that do this are Meteor.publish and Meteor.subscribe

