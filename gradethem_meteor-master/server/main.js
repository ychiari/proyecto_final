import { Meteor } from 'meteor/meteor';
import Items from '../imports/api/items.js';

Meteor.startup(() => {
  if (Items.find().count() === 0){
    for (var i = 0; i < 40; i++) {
      Factory.define('items', Items, {
        title: Fake.sentence(3),
        description: Fake.paragraph(5)
      });
      const book = Factory.create('items');
    }
  }
});
