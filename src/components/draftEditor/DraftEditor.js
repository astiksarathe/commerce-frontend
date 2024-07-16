import React from "react";
import { convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "./drafteditor.scss";
const convertContentToHTML = (rawContent) => {
  try {
    const contentState = convertFromRaw(rawContent);
    const html = draftToHtml(convertToRaw(contentState));
    return html;
  } catch (error) {
    console.error("Error converting content to HTML:", error);
    return "<p>Invalid content</p>";
  }
};

function DraftEditor({ value }) {
  if (!value) return <></>;

  return (
    <div
      className="display-description"
      dangerouslySetInnerHTML={{ __html: convertContentToHTML(value) }}
    />
  );
}

export default DraftEditor;
