import { css } from '@emotion/core'

export const SearchResultsContainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // background-color: gray;
`
export const ResultsContent = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 4%;
`
export const HeaderContainer = css`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
`
export const FilterBtn = css`
    font-size: 19px;
    width: 100px;
    height: 42px;
    border-radius: 10px;
    position: absolute;
    right: 0;
    bottom: 14%;
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