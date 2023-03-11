// Basic example: create new content type.
module.exports = function (migration) {
  const dog = migration.createContentType('dog', {
    name: 'dog',
    description: 'super cuddly'
  });

  dog.createField('name', {
    name: 'name',
    type: 'Text',
    required: true
  });

  dog.createField('age', {
    name: 'age',
    type: 'Number',
    required: true
  });
}

