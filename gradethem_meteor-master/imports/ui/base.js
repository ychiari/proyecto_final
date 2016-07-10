// External libraries
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
// Internal libraries
import { Tasks } from '../api/items.js';
// Internal JS
import '../router/router.js';
// Templates
import './base.html';
import './navbar/template.js';
import './home/template.js';

Template.MainLayout.onCreated(function(){
  /* Placeholder */
});
