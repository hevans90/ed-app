import { useEffect, useRef, useState } from 'react';

export const Footer = () => {
  const [count, setCount] = useState(2);

  const reaction = useRef('initial');

  useEffect(() => {
    reaction.current = count < 5 ? 'you suck' : 'awesome';
  }, [count]);

  if(count === 12) {
    return <div>You FAILED</div>
  }

  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>{reaction.current}</p>
    </div>
  );
};
