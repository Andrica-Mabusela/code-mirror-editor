const htmlCodeEditor = CodeMirror( document.querySelector('.code .html-code'), {
    mode: "xml",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true
} )

const cssCodeEditor = CodeMirror( document.querySelector('.code .css-code'), {
    mode: "css",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true
} )

const jsCodeEditor = CodeMirror( document.querySelector('.code .js-code'), {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true
} )


document.querySelector('#run-btn').addEventListener('click', function(){
    let htmlCode = htmlCodeEditor.getValue();
    let cssCode = "<style>"+ cssCodeEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsCodeEditor.getValue() + "</scri" + "pt>";

    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + cssCode + jsCode);
    previewWindow.close();

})