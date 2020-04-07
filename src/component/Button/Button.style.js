import styled from 'styled-components';
import Constants from '../../constants';


export const ButtonStyle = styled.button`
    background-color: ${Constants.COLOR.SECONDARY_COLOR};
    font-size: 1.15rem;
    border: none;
    font-weight: 500;
    color: ${Constants.COLOR.ACTIVE_COLOR};
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.15s ease;
    outline: none;
    padding: 5px 10px;
    &:hover{
        background-color: ${Constants.COLOR.SECONDARY_ACTIVE_COLOR};
    }
`
