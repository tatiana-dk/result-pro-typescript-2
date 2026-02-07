var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var getData = function (url, postId) {
    return fetch("".concat(url, "?postId=").concat(postId));
};
getData(COMMENTS_URL, 1)
    .then(function (response) {
    if (!response.ok) {
        throw Error('Bad request');
    }
    return response.json();
})
    .then(function (data) {
    data.forEach(function (comment) {
        console.log("ID: ".concat(comment.id, ", Email: ").concat(comment.email));
    });
})
    .catch(function (err) {
    console.error(err);
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */ 
