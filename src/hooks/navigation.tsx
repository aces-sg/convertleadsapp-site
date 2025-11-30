import { navigate } from "gatsby";

export const toViewer = () => {
  navigate(process.env.GATSBY_VIEWER_URL);
};

export const handleDefault = () => {
  navigate("mailto:enquiry@bim.com.sg?subject=BIM%20Enquiry");
};
