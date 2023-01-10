import React from 'react';

export default function ControledFormSample() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('a inp:', e.target.elements.a.value);
    console.log('b inp:', e.target.elements.b.value);
    console.log('c inp:', e.target.elements.c.value);

    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="a" />
        <input type="text" name="b" />
        <input type="text" name="c" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
