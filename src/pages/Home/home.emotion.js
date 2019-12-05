import { css } from '@emotion/core'

export const HomeContainer = css`
    background-color: #282c34;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = css`
    font-weight: 200;
    color: white;
    font-size: 54px;
    margin-left: -4.5%;
    margin-bottom: 2%;
`
export const ContentContainer = css`
    margin-top: -20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const QueryInput = css`
    width: 39%;
    height: 42px;
    font-size: 18px;
    font-weight: 350;
    padding: 0.2em 1em 0.2em 1em;
    border-radius: 5px;
    outline: none;
    margin-right: 1.5%;
    color: black;
`
export const SearchBar = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
`
export const SubmitSearch = css`
    font-size: 19px;
    width: 125px;
    height: 42px;
    border-radius: 10px;
    padding: 0px 30px 0px 30px;
    font-weight: 400;
    color: white;
    background: none;
    outline: none;

    &:hover {
        color: lightgreen;
        border-color: lightgreen;
        cursor: pointer;
    }
`
export const LabelSpan = css`
    position: absolute;
    color: lightblue;
    font-weight: 200;
    font-size: 18px;
    top: 45%;
`
