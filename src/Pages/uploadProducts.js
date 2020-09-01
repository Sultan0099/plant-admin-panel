import React from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Uploads() {


  const fileSelectoedHandler = (event) => {
    console.log(event.target.files[0]);
  }

  const fileUpLoadHandler = () => {

  }

  return (
    <div className='uploads'>
      <h1 className="font-weight-bolder">Upload Products</h1>
      <br /><br />
      <input type="file" className="" onChange={fileSelectoedHandler} />
      <br /><br /><br /><br />
      <div className="form-group col-md-6">
        <label For="productName" className="font-weight-bold">Product Name</label>
        <input type="text" className="form-control" id="productName" />
      </div>
      <br />
      <div className="form-group col-md-6">
        <label For="description" className="font-weight-bold">Description</label>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <br />
      <div className="form-group col-md-6">
        <label For="price" className="font-weight-bold">Price</label>
        <input type="number" className="form-control " id="price" />
      </div>
      <br /><br />
      <button onClick={fileUpLoadHandler} className="btn btn-success">Upload</button>
      <hr className="" />
    </div>
  );
}

export default Uploads;