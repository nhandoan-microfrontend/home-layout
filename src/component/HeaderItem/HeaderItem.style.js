import styled from 'styled-components';
import Constants from '../../constants';

export const HeaderItemDiv = styled.div`
    cursor: pointer;
    padding: 5px 10px;
    transition: 0.15s all ease;
    font-size: 1.15rem;
    &:hover{
        color: ${Constants.COLOR.ACTIVE_COLOR};   
    }
`