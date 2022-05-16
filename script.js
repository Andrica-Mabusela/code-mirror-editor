const htmlCodeEditor = CodeMirror.fromTextArea( document.querySelector('.code .html-code'), {
    mode: "xml",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true
} )

htmlCodeEditor.refresh()

const cssCodeEditor = CodeMirror.fromTextArea( document.querySelector('.code .css-code'), {
    mode: "css",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true
} )

cssCodeEditor.refresh()

const jsCodeEditor = CodeMirror.fromTextArea( document.querySelector('.code .js-code'), {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    autoCloseTags: true
} )

jsCodeEditor.refresh()


document.querySelector('#run-btn').addEventListener('click', function(){
    let htmlCode = htmlCodeEditor.getValue();
    let cssCode = "<style>"+ cssCodeEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsCodeEditor.getValue() + "</scri" + "pt>";

    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + cssCode + jsCode);
    previewWindow.close();

})


let listItems = document.querySelectorAll('.nav-tabs li')
let htmlItem = document.querySelector('.nav-tabs .html-item')
let cssItem = document.querySelector('.nav-tabs .css-item')
let jsItem = document.querySelector('.nav-tabs .js-item')

listItems.forEach(item => {
    console.log(item)
    item.addEventListener('click', (e) => {
       if( e.target.classList.contains('html-item') || e.target.classList.contains('html-item-img') ){
                htmlItem.style.backgroundColor = '#44475a';
                cssItem.style.backgroundColor = 'transparent';
                jsItem.style.backgroundColor = 'transparent';
                console.log('html block selected')
       } else if( e.target.classList.contains('css-item') || e.target.classList.contains('css-item-img') ){
                 htmlItem.style.backgroundColor = 'transparent';
                 cssItem.style.backgroundColor = '#44475a';
                 jsItem.style.backgroundColor = 'transparent';
            console.log('css block selected')
       } else if( e.target.classList.contains('js-item') || e.target.classList.contains('js-item-img') ){
                htmlItem.style.backgroundColor = 'transparent';
                cssItem.style.backgroundColor = 'transparent';
                jsItem.style.backgroundColor = '#44475a';
             console.log('js block selected')
       }
    })
})
