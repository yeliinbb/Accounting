import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
    font-family: aktiv-grotesk-georgian, sans-serif;
    font-style: normal;
    color: #474845;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #B4C4B1;
        margin: 0 auto;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }

    /* #root {
        background-color: #B4C4B1;
        margin: 0 auto;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
    } */

    header {
        background-color: #f6f5f4;
        width: 1200px;
        /* h1 세로축 가운데 정렬 하드 코딩 */
        height: 70px;
        padding-top: 7px;
        box-sizing: border-box;
        /*  */
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        border-radius: 15px;
        font-size: 45px;
        font-weight: 600;
        
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f6f5f4;
        width: 1200px;
        padding: 30px 50px;
        box-sizing: border-box;
        border-radius: 15px;
        gap: 20px;
    }
    label {
        font-size: 18px;
        font-weight: 600;
    }
    input {
        border: none;
        width: 200px;
        height: 30px;
        border-radius: 5px;
        padding: 0px 7px;
        box-sizing: border-box;
        color: rgba(0,0,0,0.4);
    }
    input ::placeholder {
        color: rgba(0,0,0,0.2);
        align-content: center;
    }

    button {
        background-color: #78866b;
        color: #F8F2EB;
        border: 0;
        width: 70px;
        height: 30px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 500;
    }

    section {
        background-color: #f6f5f4;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        grid-template-rows: repeat(2,1fr);
        gap: 20px;
        width: 1200px;
        padding: 20px 30px;
        box-sizing: border-box;
        border-radius: 15px;
    }

    ul {
        background-color: #f6f5f4;
        width: 1200px;
        display: grid;
        /* grid-template-rows: repeat(auto-fit,minmax(70px, 1fr)); */
        grid-auto-rows: minmax(80px, auto);
        gap: 10px;
        padding: 20px 30px;
        box-sizing: border-box;
        border-radius: 15px;
    }

    li {
        background-color: #d1dad0c1;
        /* border: 1px solid #EC5800; */
        /* box-shadow: 0px 0px 10px 1px #ec560056; */
        color: #EC5800;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        gap: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    li > div > h3 {
        color: #F8F2EB;
    }
    
    li > div > p {
        font-weight: 500;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    li >  span {
        font-weight: 500;
        font-size: 18px;
    }
`;

export default GlobalStyle;
