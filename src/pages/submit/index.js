import React, { useRef, useState } from "react";
import Button from "components/UI/Button";
import FileSubmissionForm from "../../containers/forms/FileSubmissionForm";
const Submit = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const widgetRef = useRef(null);
  const fileLinks = isReady
    ? widgetRef?.current.getInput().value
    : null;

  return (
    <div>
      {!isReady ? (
        <div className="uploader_container">
          <div className="header_wrapper">
            <h4>File Uploads</h4>
            <p className="text-center">
              We accept a variety of file types (i.e .pdf, .dwg, .dgn,
              .zip). Please upload your files below.
            </p>
          </div>

          <div className="content_wrapper">
            <div className="file_uploader"></div>
          </div>
          <div className="logo_container">
            {uploadedFile ? (
              <Button primary label="Next" onClick={() => setIsReady(true)} />
            ) : null}
          </div>

          <div className="logo_privacy"></div>
        </div>
      ) : (
        <FileSubmissionForm metadata={fileLinks} />
      )}
    </div>
  );
};

export default Submit;
