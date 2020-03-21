import React, { useState } from 'react';
import axios from 'axios';

export default function Postform() {
  const [form, setForm] = useState({ title: '', body: '' });

  const handleChange = e => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const post = form;
    console.log(post);
    axios
      .post('/posts', post)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title :</label>
          <br />
          <input
            name='title'
            type='text'
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Body :</label>
          <br />
          <textarea name='body' value={form.body} onChange={handleChange} />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
