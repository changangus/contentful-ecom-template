module.exports = function (migration) {
  const dog = migration.editContentType('dog');
  
  dog.deleteField('age');

  dog.createField('age', {
    name: 'Age',
    type: 'Number',
    required: false,
  });
}

