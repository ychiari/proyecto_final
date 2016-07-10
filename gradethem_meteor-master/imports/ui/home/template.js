import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './template.html';
import Items from '../../api/items.js';

Template.Home.onCreated(function homeOnCreated() {
  // Subscribing to items
  Meteor.subscribe('items');
  console.log(Items.find().fetch());
  console.log('1');
});

Template.Home.onRendered(function homeOnRendered(){
  // Initializing isotope
  console.log('2');
  console.log(Items.find().fetch());
  Meteor.defer(function (){
    console.log(Items.find().fetch());
    $('.grid').isotope('layout');
  });
});

Template.Home.helpers({
  items() {
    return Items.find();
  }
});
