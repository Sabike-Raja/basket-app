/* eslint-disable no-undef */
import React, { useEffect } from "react";

require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

const Editor = () => {
  useEffect(() => {
    var editor = new MediumEditor(".editable");
    $(function () {
      $(".editable").mediumInsert({
        editor: editor,
      });
    });
  }, []);
  return <div className="editable"></div>;
};

export default Editor;
