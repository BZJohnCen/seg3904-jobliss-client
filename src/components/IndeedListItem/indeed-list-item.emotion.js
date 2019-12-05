import { css } from '@emotion/core'
// import bp from '../../styles/breakpoint'

export const CardContainer = css`
    display: flex;
    // flex-direction: row;
    overflow: hidden;
    width: 100%;
    height: fit-content;
    //height: 125px;
    // background-color: gray; //remove after
    // border-radius: 1em;
    // border-top: 1px solid lightgray;
    // border-bottom: 1px solid lightgray;
    border: 0.5px solid lightgray;
    padding: 16px 2em;
    cursor: pointer;
    transition: all .2s ease-in-out;
    border-radius: 5px;

    &:hover{
        // border-top: 5px green solid;
        // border-bottom: 5px green solid;
        border: 2px green solid;
        transform: scale(1.02);
    }

    @media (min-width: 992px) {
        height: 225px;
    }
    @media (min-width: 1200px) {
        height: fit-content;
    }
`
export const CardBodyStyle = {
    width: "100%",
    padding: "0"
}

export const SourceLogoContainer = css`
    display: flex;
    height: 100%;
    width: 90%;
    // background-color: aliceblue;
    border-radius: 2em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const SourceLogoCol = css`
    @media (min-width: 992px) { 
        height: 51%; 
    } 
    @media (min-width: 1200px) {
        height: 100%;
    }
`
export const ContentContainer = css`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: calc(100% - 0.5em);
    // background-color: lightgreen; //remove after
    border-radius: 1em;
    // margin-left: 1.5%;
    padding: 0.2em 0em;
    align-items: center;
    position: relative;
`
export const JobInfoContainer = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%; 
    // background-color: purple; //remove after
    // justify-content: center;
    // align-items: center;

    @media (min-width: 992px) {
        text-align: left;
    }
`
export const MetaDataContainer = css`
    display: flex;
    flex-direction: row;
    width: 100%;   
    justify-content: left;
    align-items: center;
`
export const SummaryContainer = css`
    display: flex;
    width: 100%;
    padding-left: 4%;
    padding-bottom: 2%;
    padding-right: 0.5%;
`
export const JobInfoCol = css`
    @media (min-width: 992px) { 
        height: fit-content; 
    }
    @media (min-width: 1200px) { 
        height: 100%; 
    }
`
export const CardText = css`
    font-weight: 200;
    margin: 0em 0em;
    padding-left: 4%;
    font-size: 18px;
    width: fit-content;
    color: black;
    height: 100%;
    // margin-left: 0;
`
export const LocationText = css`
    font-weight: 300;
    margin: 0em 0em;
    padding-left: 4%;
    font-size: 16px;
    width: fit-content;
    color: black;
    height: 100%;
    margin-bottom: 2%;
    margin-top: 1.9px;
    color: gray;

    @media (min-width: 992px){
        margin-top: 1.9px;

    }
    @media (min-width: 1200px){
        margin-top: 1.85px;
    }
`

export const DateReviewText = css`
    font-weight: 300;
    margin: 0em 0em;
    font-size: 16px;
    width: fit-content;
    color: black;
    height: 100%;
    display: flex;
    padding-left: 4%;
    justify-content: center; 
    align-items: center;

    @media (min-width: 992px) {
        width: 100%;
        justify-content: left; 
        align-items: left;
    }
`
export const ApplySection = css`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const ApplyButton = css`
    border: 1px green solid;
    padding: 10px 25px 10px 25px;
    border-radius: 5px;
    background-color: green;
    color: white;
    font-size: 15px;
    font-weight: 500;

    &:hover {
        color: white;
        border-color: #0fa334;
        background-color: #0fa334;
    }
`
export const TitleLink = css`
    color: black;
    transition: hover 0.5s ease-in;

    &:hover {
        border-bottom: 1px #1890ff solid;
    }
`
//     ${bp['medium']} {
//         width: 720px;
//     }

//     ${bp['large']} {
//         width: 1080px;
//     }
// `