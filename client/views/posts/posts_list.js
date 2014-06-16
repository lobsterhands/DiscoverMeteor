var postsData = [
    {
        title: 'Introducing Telescope'
        , author: 'Sacha Greif'
        , url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor'
        , author: 'Tom Coleman'
        , url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book'
        , author: 'Tom Coleman'
        , url: 'http://themeteorbook.com'
    },
    {
        title: 'Lyle Denman'
        , author: 'Lyle Denman'
        , url: 'http://lyledenman.com'
    },
    {
        title: 'Henley Edition'
        , author: 'Evan Henley'
        , url: 'http://henleyedition.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});
