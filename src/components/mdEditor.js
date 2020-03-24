import React from 'react'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

const editorRef = React.createRef();

const handleChange = () => {
    let md = editorRef.current.getInstance().getMarkdown();
    console.log(md)
}

export default () => {

    return (
        <Editor 
            initialValue="hello react editor world!"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={editorRef}
            onChange={() => handleChange()}
        />
    )
}