const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Comment {
    id: number;
    email: string;
}

const getData = (url: string, postId: number): Promise<Response> => {
  return fetch(`${url}?postId=${postId}`);
}

getData(COMMENTS_URL, 1)
  .then(response => {
    if (!response.ok) {
        throw Error('Bad request');
    }

    return response.json();
  })
  .then((data: Array<Comment>) => {
    data.forEach(comment => {
        console.log(`ID: ${comment.id}, Email: ${comment.email}`)
    })
  })
  .catch(err => {
    console.error(err);
  });