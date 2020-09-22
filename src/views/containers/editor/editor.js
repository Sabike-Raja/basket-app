/* eslint-disable no-undef */
import React, { useEffect, Fragment } from "react";
// import { Helmet } from "react-helmet";
// import MetaTags from "react-meta-tags";

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
    setTimeout(() => {
      document.getElementsByTagName("META")[5].content =
        "https://mc-dev-s3.ams3.digitaloceanspaces.com/gate/logos/5e0fdb80-a630-11ea-b690-b5bab8ecc8d8?AWSAccessKeyId=TCLB25UJCUSZ63MYSM2V&Expires=1600692484&Signature=4aYSERMhA%2Bep9OjFVMIujTgUGo8%3D";
    }, 2000);
  }, []);
  return (
    <Fragment>
      {/* <MetaTags>
        <title>Editor</title>
        <meta name="description" property="og:description" content="We create our own post" />
        <meta property="og:title" content="My editor" />
        <meta name="image" property="og:image" content="https://mc-dev-s3.ams3.digitaloceanspaces.com/gate/logos/5e0fdb80-a630-11ea-b690-b5bab8ecc8d8?AWSAccessKeyId=TCLB25UJCUSZ63MYSM2V&Expires=1600692484&Signature=4aYSERMhA%2Bep9OjFVMIujTgUGo8%3D" />
      </MetaTags> */}
      <div className="editable"></div>
    </Fragment>
  );
};

export default Editor;
