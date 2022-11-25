import React, { useState } from 'react';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
  const [value, setValue] = useState('');
  const handleChange = (value) => {
    console.log(value);
    setValue(value);
  };

  return (
    <div className="w-10/12 mt-3">
      <ReactQuill theme="snow" value={value} onChange={handleChange} />
    </div>

    // <div className="text-editor">
    //   <EditorToolbar />
    //   <ReactQuill
    //     name="editor"
    //     theme="snow"
    //     // value={state.value}
    //     // onChange={handleChange}
    //     placeholder={'Write something awesome...'}
    //     modules={modules}
    //     formats={formats}
    //   />
    // </div>
  );
}
