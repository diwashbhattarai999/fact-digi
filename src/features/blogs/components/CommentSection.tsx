'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function CommentSection() {
  const [comments, setComments] = useState<Array<{ author: string; content: string }>>([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { author: 'Anonymous', content: newComment }]);
      setNewComment('');
    }
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="mb-4" onSubmit={handleSubmit}>
          <Textarea
            className="mb-2"
            placeholder="Leave a comment..."
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
          <Button type="submit">Post Comment</Button>
        </form>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4 rounded bg-gray-100 p-4">
            <h4 className="font-bold">{comment.author}</h4>
            <p>{comment.content}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
