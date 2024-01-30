export const CSS = /*css*/ `

    #GGUI-Container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #3e3e3e;
        display: flex;
        flex-direction: row;
        padding: 25px;
        border: solid #262626 4px;
    }

    .GGUI-Folder {
        min-width: 200px;
        background-color: #2e2e2e;
        color: white;
        padding: 5px;
        margin-left: 10px;
        margin-right: 10px;
        overflow: auto;
    }

    /* Prevent margin against the container */
    .GGUI-Folder:first-child {
        margin-left: 0px;
    }
    .GGUI-Folder:last-child {
        margin-left: 0px;
    }

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

    #GGUI-Folder-Container {
        display: flex;
        overflow: auto;
    }

`;
