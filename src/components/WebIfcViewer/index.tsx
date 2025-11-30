import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Grid,
  Text,
  Heading,
  Anchor,
  Grommet,
  Button,
} from "grommet";
import { Previous } from "grommet-icons";
import { navigate } from "gatsby";
import { IfcViewerAPI } from "web-ifc-viewer";
import * as LR from "@uploadcare/blocks";
import theme from "assets/theme";
import Uploader from "components/Uploader";

LR.registerBlocks(LR);

const WebIfcViwer = (props) => {
  const [viewer, setViewer] = useState<IfcViewerAPI>();
  const [uploadFiles, setUploadFiles] = useState<any[]>([]);
  const widgetRef = useRef();
  const dataOutputRef = useRef<LR.DataOutput>();
  const { id } = props;

  const handleUploaderEvent = useCallback((e: CustomEvent<any>) => {
    const { data } = e.detail;
    setUploadFiles(data);
  }, []);

  const addUrl = async (url) => {
    let objectURL = URL.createObjectURL(url);
    await viewer.IFC.loadIfcUrl(objectURL);
  };

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const container = document.getElementById(
      "viewer-container"
    ) as HTMLElement;
    const Ifcviewer = new IfcViewerAPI({ container });
    Ifcviewer.axes.setAxes();
    Ifcviewer.grid.setGrid();
    Ifcviewer.IFC.setWasmPath("../../");
    setViewer(Ifcviewer);

    window.ondblclick = () =>
      Ifcviewer.IFC.selector.pickIfcItem(true);
    window.onmousemove = () =>
      Ifcviewer.IFC.selector.prePickIfcItem();
    window.ondblclick = () =>
      Ifcviewer.IFC.selector.highlightIfcItem(true);
    window.onkeydown = (event) => {
      if (event.code === "KeyC") {
        Ifcviewer.IFC.selector.unpickIfcItems();
        Ifcviewer.IFC.selector.unHighlightIfcItems();
      }
    };

    window.onkeydown = (event) => {
      if (event.code === "KeyP") {
        Ifcviewer.clipper.createPlane();
      }
    };

    Ifcviewer.clipper.active = true;
  }, []);

  useEffect(() => {
    if (viewer && uploadFiles.length) {
      console.log("Load Ifc file", uploadFiles);
      fetch(uploadFiles[0].cdnUrl)
        .then((res) => res.blob())
        .then((blob) => {
          // Here, I use it to make an image appear on the page
          addUrl(blob);
        });
    }
  }, [uploadFiles]);

  useEffect(() => {
    const el = dataOutputRef.current;

    el?.addEventListener(
      "lr-data-output",
      handleUploaderEvent as EventListenerOrEventListenerObject
    );
    return () => {
      el?.removeEventListener(
        "lr-data-output",
        handleUploaderEvent as EventListenerOrEventListenerObject
      );
    };
  }, [handleUploaderEvent]);

  useEffect(() => {
    console.log("id log", id);
    if (viewer && id) {
      renderIFCFromUrl("https://ucarecdn.com/" + id + "/");
    }
  }, [viewer, id]);

  const clickTest = () => {};

  const renderIFCFromUrl = (cdnUrl) => {
    fetch(cdnUrl)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        addUrl(blob);
      });
  };

  return (
    <Grommet theme={theme} full>
      <Grid
        fill="vertical"
        areas={[
          { name: "nav", start: [0, 0], end: [0, 0] },
          { name: "main", start: [1, 0], end: [1, 0] },
        ]}
        columns={["medium", "flex"]}
        rows={["flex"]}
      >
        <lr-config
          ctx-name="uploader"
          pubkey={process.env.GATSBY_UPLOADCARE_KEY}
        />
        <Box gridArea="nav" margin="small">
          <Box direction="row" gap="small">
            <Button
              icon={<Previous />}
              onClick={() => handleBack()}
              label="Home"
            />
          </Box>

          <Box id="cta-heading" margin={"medium"}>
            <Heading level="4" size="small">
              The Best Free IFC Viewer
            </Heading>
            <Text margin={{ bottom: "medium" }}>
              Drag and drop a single IFC file below.
            </Text>
            <Uploader widgetRef={widgetRef} />
            <Anchor
              color="#0000FF"
              label="Contact Us"
              alignSelf="center"
              margin={{ vertical: "small" }}
              href="https://form.jotform.com/240107241234441"
            />
          </Box>
        </Box>

        <Box gridArea="main" id="viewer-container">
          <lr-data-output
            ref={dataOutputRef}
            use-console
            use-event
            hidden
            ctx-name="uploader"
          />
        </Box>
      </Grid>
    </Grommet>
  );
};

export default WebIfcViwer;
