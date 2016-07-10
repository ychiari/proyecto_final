import './template.html';

Template.Navbar.events({
  "click #login-dropdown-list": function(event, template){
    // Removing checkbox class which doesn't let the user click on the checkbox
  }
});
