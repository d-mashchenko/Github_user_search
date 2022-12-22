import { useState, useEffect } from 'react';
import { Input } from './Input';

export function Form() {
  const [text, setText] = useState('');

  const handleChacnge = (text) => {};

  return (
    <div>
      <Input />
    </div>
  );
}
