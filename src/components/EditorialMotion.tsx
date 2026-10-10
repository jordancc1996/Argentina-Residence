import { useLayoutEffect } from "react";
import { bindEditorialSection } from "@/lib/editorialDividers";

/** Starts the shared divider reveal once for every page. */
const EditorialMotion = () => {
  useLayoutEffect(() => bindEditorialSection(document.documentElement), []);
  return null;
};

export default EditorialMotion;
