/* eslint-disable no-undef */
import React, { useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";

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
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Editor</title>
        <link rel="canonical" href="https://mc-dev-s3.ams3.digitaloceanspaces.com/gate/logos/5e0fdb80-a630-11ea-b690-b5bab8ecc8d8?AWSAccessKeyId=TCLB25UJCUSZ63MYSM2V&Expires=1600692484&Signature=4aYSERMhA%2Bep9OjFVMIujTgUGo8%3D" />
      </Helmet>
      <div className="editable"></div>
    </Fragment>
  );
};

export default Editor;
