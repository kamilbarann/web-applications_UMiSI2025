import React, { useState, useEffect } from 'react';
import Komentarz from './Komentarz';


interface User {
    id: number;
    username: string;
    fullName: string;
}

interface CommentData {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}

const Komentarze = () => {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data.comments);
      })
      .catch(error => console.error("Błąd pobierania danych:", error));
  }, []);

  return (
    <div>
      <h3>Zadanie 7 - Komentarze z API</h3>
      <div>
        {comments.map((comment) => (
          <Komentarz
            key={comment.id}
            id={comment.id}
            body={comment.body}
            postId={comment.postId}
            likes={comment.likes}
            user={comment.user}
          />
        ))}
      </div>
    </div>
  );
};

export default Komentarze;