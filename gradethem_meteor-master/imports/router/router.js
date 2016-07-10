FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("MainLayout", {content: "Home"});
  }
});

FlowRouter.route('/:postId', {
  action: function() {
    BlazeLayout.render("MainLayout", {content: "blogPost"});
  }
});
