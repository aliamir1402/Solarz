import React from "react";
import Dataset from "./images/DataSet Solarz.png";
import ColabNoteBook from "./images/Colab NoteBook.png";

export default function QrContent() {
  return (
    <>
      <div className="App-container bor pt-4">
        <div className="App-item bor Qr-Div">
          <img
            src={ColabNoteBook}
            alt="ColabNoteBookImage"
            width={150}
            height={150}
          />
          <span className="SubSubContent-1">Colab NoteBook</span>
        </div>
        <div className="App-item bor Qr-Div">
          <img src={Dataset} alt="DatasetImage" width={150} height={150} />
          <span className="SubSubContent-2">DataSet</span>
        </div>
      </div>
    </>
  );
}
