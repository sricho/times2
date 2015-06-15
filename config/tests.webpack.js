var context = require.context('../app', true, /tests\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);