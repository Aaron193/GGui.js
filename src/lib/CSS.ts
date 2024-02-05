export const CSS = /*css*/ `

    /* for development  */
    body {
        background-color:black;
    }

    #GGUI-Container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #3e3e3e;
        display: flex;
        flex-direction: column;
        /* no padding on top/bottom (keep room for title/footer) */
        padding: 0 25px 0px 25px;
        border: solid #262626 4px;
    }
    
    #GGUI-Folder-Container {
        display: flex;
        overflow: auto;
    }

    /* Title */
    #GGUI-Title {
        display: flex;
        justify-content: center;
        color: white;
        padding-top: 12px;
        padding-bottom: 12px;
    }
    
    /* Footer */
    #GGUI-footer {
        display: flex;
        justify-content: center;
        color: #b89749;
        padding-top: 6px;
        padding-bottom: 6px;
    }   

    /* Folders */
    .GGUI-Folder {
        min-width: fit-content;
        background-color: #2e2e2e;
        color: white;
        padding: 5px;
        margin-left: 10px;
        margin-right: 10px;
        overflow-y: auto;

    }

    .GGUI-Folder-Title {
        display: flex;
        justify-content: center;
        color: white;
        padding-top: 3px;
        padding-bottom: 3px;
    }

    /* Prevent margin against the container */
    .GGUI-Folder:first-child {
        margin-left: 0px;
    }
    .GGUI-Folder:last-child {
        margin-left: 0px;
    }

    /* Row :: Folder child */
    .GGUI-Row {
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    /* Prevent margin against top/bottom of folder */
    .GGUI-Row:first-child {
        margin-top: 0px;
    }
    .GGUI-Row:last-child {
        margin-bottom: 0px;
    }

    /* FileUpload */
    .GGUI-FileUpload {
        /* color: transparent; */
    }
`;
