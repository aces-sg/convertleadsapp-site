import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Button, ResponsiveContext } from "grommet";
import * as LR from "@uploadcare/blocks";
import ActionButton from "./ActionButton";
import FolderIcon from "@/assets/svgs/folder.svg";
import DocumentIcon from "@/assets/svgs/document.svg";
import { navigate } from "gatsby";
import "./files.scss";

LR.FileUploaderRegular.shadowStyles = /* CSS */ `
  :host lr-simple-btn button {
    background-color: #0061fe !important;
    min-height: 40px;
    color: white;
    font-size: 18px !important;
    font-family: Inter;
  }

  :host lr-drop-area {
    // background: #0061fe;
    // color: white;
    // min-height: 40px;
  }

  :host lr-copyright {
    display: none;
  }
`;
LR.registerBlocks(LR);

export default function FilesPage({ selectedProject }) {
  const size = useContext(ResponsiveContext);
  const [uploadFiles, setUploadFiles] = useState<any[]>([]);
  const widgetRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const dataOutputRef = useRef<LR.DataOutput>();
  const [projectSubmissions, setProjectSubmissions] = useState<any[]>(
    []
  );

  const handleUploaderEvent = useCallback((e: CustomEvent<any>) => {
    const { data } = e.detail;
    console.log("data", data);
    setUploadFiles([...uploadFiles, ...data]);
  }, []);

  async function updateSubmission(uploadCareFiles) {
    console.log(uploadCareFiles);
    let formattedFiles: SubmissionInput = uploadCareFiles.map(
      (file) => {
        return {
          id: file.uuid,
          name: file.name,
          modelId: file.uuid,
          modelUrl: file.cdnUrl,
        };
      }
    );
    try {
      let res = await API.graphql({
        query: updateProject,
        variables: {
          input: {
            id: selectedProject.id,
            submissions: formattedFiles,
          },
        },
      });
      console.log("updated project", res);
    } catch (err) {
      console.log("failed to update submission", err);
    }
  }

  useEffect(() => {
    console.log("selected project is", selectedProject);
    const filesObj = localStorage.getItem("files");
    const currentFiles = JSON.parse(filesObj);
    setUploadFiles(currentFiles);

    window.addEventListener("LR_UPLOAD_FINISH", (e) => {
      let uploadCareFiles = e.detail.data;
      updateSubmission([...uploadCareFiles]);
      setUploadFiles([...uploadFiles, ...e.detail.data]);
    });
  }, []);

  useEffect(() => {
    const tempUploadFiles = [...uploadFiles];

    localStorage.setItem("files", JSON.stringify(tempUploadFiles));
  }, [uploadFiles]);

  useEffect(() => {
    const el = dataOutputRef.current;
  }, [handleUploaderEvent]);

  useEffect(() => {
    async function listSubmissions(selectedProject) {
      try {
        let res = await API.graphql({
          query: getProject,
          variables: {
            id: selectedProject.id,
          },
        });
        setProjectSubmissions(res?.data.getProject.submissions);
      } catch (err) {
        console.log("failed to query submissions", err);
      }
    }
    listSubmissions(selectedProject);
  }, [selectedProject]);

  console.log("uploadFiles", uploadFiles);

  return (
    <Box>
      <Box className="topHeader">
        <span
          className="mobileMenu"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="dig-UIIcon dig-UIIcon--standard"
            width="24"
            height="24"
            role="presentation"
            focusable="false"
          >
            <path
              d="M18.5 16.5h-13V18h13v-1.5Zm0-5.5h-13v1.5h13V11Zm0-5.5h-13V7h13V5.5Z"
              fill="currentColor"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </span>
      </Box>
      <Box className="files_container">
        <Box className={`side_panel ${openMenu ? "active" : ""}`}>
          <ul>
            <li>
              <Button onClick={() => navigate("/")}>Home</Button>
            </li>
            <li>
              <Button>All files</Button>
            </li>
          </ul>
        </Box>
        <Box className="browser_panel">
          <Box className="btn_container">
            <Box className="uploadBtnWrapper">
              <Box>
                <lr-config
                  ctx-name="my-uploader"
                  pubkey={process.env.GATSBY_UPLOADCARE_KEY}
                ></lr-config>
                <lr-file-uploader-regular
                  ref={widgetRef}
                  ctx-name="my-uploader"
                  class="uploaderCfg"
                  css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.25.6/web/lr-file-uploader-regular.min.css"
                />
                {/* <lr-upload-ctx-provider id="uploaderctx" ctx-name="my-uploader" /> */}
              </Box>
            </Box>
          </Box>

          <Box className="browser">
            {projectSubmissions.length ? (
              projectSubmissions.map(
                ({
                  id,
                  name,
                  modelId,
                  modelUrl,
                }: SubmissionInput) => {
                  return (
                    <Box key={modelId} className="row">
                      <Box className="nameCell">
                        {modelId ? (
                          <DocumentIcon height="40px" />
                        ) : (
                          <FolderIcon height="40px" />
                        )}
                        <p></p>
                      </Box>
                      <p className="urlCell">{name}</p>
                      <Box className="actionCell">
                        <ActionButton
                          item={modelUrl}
                          handleFiles={setUploadFiles}
                        />
                      </Box>
                    </Box>
                  );
                }
              )
            ) : (
              <Box>
                {uploadFiles?.map(
                  ({ id, name, modelId, modelUrl }) => {
                    return (
                      <Box key={modelId} className="row">
                        <Box className="nameCell">
                          {modelId ? (
                            <DocumentIcon height="40px" />
                          ) : (
                            <FolderIcon height="40px" />
                          )}
                          <p></p>
                        </Box>
                        <p className="urlCell">{name}</p>
                        <Box className="actionCell">
                          <ActionButton
                            item={modelUrl}
                            handleFiles={setUploadFiles}
                          />
                        </Box>
                      </Box>
                    );
                  }
                )}
              </Box>
            )}
          </Box>
        </Box>
        <Box gridArea="main" id="viewer-container">
          <lr-data-output
            ref={dataOutputRef}
            use-console
            use-event
            // hidden
            ctx-name="my-uploader"
          />
        </Box>
      </Box>
    </Box>
  );
}
