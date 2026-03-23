import React, { useState } from 'react';

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const Komentarz: React.FC<KomentarzProps> = ({ id, body, postId, likes, user }) => {
  const [likeCount, setLikeCount] = useState(likes);

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '15px', 
      margin: '10px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ fontWeight: 'bold', marginRight: '10px' }}>
            {user.fullName} (@{user.username})
        </div>
        <div style={{ color: 'gray', fontSize: '0.8em' }}>ID: {id}</div>
      </div>

      <p style={{ fontStyle: 'italic' }}>{body}</p>

      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => setLikeCount(likeCount + 1)}>👍</button>
        <button onClick={() => setLikeCount(likeCount - 1)}>👎</button>
        <span>Liczba polubień: <strong>{likeCount}</strong></span>
      </div>
      
      <div style={{ fontSize: '0.8em', marginTop: '5px', color: '#888' }}>
        Post ID: {postId}
      </div>
    </div>
  );
};

export default Komentarz;