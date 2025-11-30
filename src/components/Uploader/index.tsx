import React, { useEffect } from "react";
import * as LR from "@uploadcare/blocks";
import { Box } from "grommet";
import "./uploadStyles.css";

LR.registerBlocks(LR);

export default function Uploader({
  widgetRef
}) {
  return (
    <Box id="cta-heading" margin={"medium"}>
      <lr-file-uploader-minimal
        ref={widgetRef}
        ctx-name="uploader"
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.22.9/web/file-uploader-minimal.min.css"
      />
      {/* <lr-upload-ctx-provider id="uploaderctx" ctx-name="uploader" /> */}
    </Box>
  )
}