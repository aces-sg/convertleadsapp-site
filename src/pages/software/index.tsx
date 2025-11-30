import { isBrowser } from "../../hooks/auth";
import { navigate } from "gatsby";

const SoftwarePage = () => {
  if (isBrowser()) {
    navigate("/software/openbuildings-bim");
  }
};

export default SoftwarePage;

export { default as CAD } from "./cad";
