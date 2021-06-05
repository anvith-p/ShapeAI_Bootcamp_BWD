import React from "react";

function Note() {
  var curryear = new Date().getFullYear();

  return (
    <div className="note">
      <h1>Javascript and React.js</h1>
      <p>
        this was an amazing boot cam taken up by shaurya sinha we covered
        everything from scratch including Javascript, React.js, HTML.
      </p>
    </div>
  );
}

export default Note;
