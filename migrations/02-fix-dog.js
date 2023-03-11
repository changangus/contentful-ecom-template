module.exports = function (migration) {
  const dog = migration.editContentType('dog');
  
  dog.deleteField('age');

  dog.createField('favoriteFood', {
    name: 'Favorite Food',
    type: 'Text',
    required: false,
  });
}

