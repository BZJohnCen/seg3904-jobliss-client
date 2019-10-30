import { css } from '@emotion/core'

export const CityInput = css`
    width: 11%;
    margin-right: 1em;
`

export const SearchBar = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const SubmitSearch = css`
    font-size: 0.83em;
    width: 115%;
    height: 1.4em;
    border-radius: 2em;
    padding: 0.3em 1em 1.5em 1em;
    font-weight: 200;
    color: white;
    background: none;

    &:hover {
        color: lightgreen;
        border-color: lightgreen;
        cursor: pointer;
    }
`