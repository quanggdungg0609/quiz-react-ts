import styled, { createGlobalStyle} from 'styled-components'
import BGImage from '../images/background.jpg'

export const GlobalStyle= createGlobalStyle`
    html{
        height: 100%
    }

    body{
        background-image:url(${BGImage});
        background-size:cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content:center
    }

    *{
        box-sizing: border-box;
        font-family:'Open Sans', sans serif;
    }
`;

export const Wrapper= styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;


    > p { 
        corlor:#fff
    }

    .score{
        color: #fff;
        font-size:2rem;
        margin:0;
    }

    h1{
        font-family: 'Open Sans', sans serif
        background-image: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        color:#f6f6f7;
        background-size: 100%;
        background-clip: text;
        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        --moz-text-fill-color:transparent;
        filter: drop-shadow(2px 2px #5555ee);
        font-size: 70px;
        text-align: center;
        font-weight:400;
        margin: 20px;
    }

    .start, .next{
        cursor: pointer;
        background: linear-gradient(90deg, rgba(119,111,250,1) 0%, rgba(9,102,121,1) 35%, rgba(0,212,255,1) 100%);
        border: 2px;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height:40px;
        padding: 0 40px;
        color:#04171b;
        font-weight: 600;

    }
    .start{
        max-width:200px;
    }
`
