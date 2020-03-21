import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

function PostForm(props) {
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
    props.createPost(post);
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
