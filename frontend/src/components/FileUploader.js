import React from 'react';

function FileUploader() {
  return (
    <div className="file-uploader">
      <label htmlFor="file-upload">Upload File</label>
      <input id="file-upload" type="file" />
    </div>
  );
}

export default FileUploader;
