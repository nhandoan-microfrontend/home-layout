import styled from "styled-components";
import Constants from '../../constants';


export const HeaderNav = styled.div`
    background-color: ${Constants.COLOR.PRIMARY_COLOR};
    color: white;
    padding: 10px 0;
`
export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    width :70%;
    max-width: 1200px;
    margin: 0 auto;
`

export const HeaderItemWrapper = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin-left: 25px;
    align-items: center;
    font-size: 1.15rem;
    color: ${Constants.COLOR.INACTIVE_COLOR};
`

export const HeaderUserWrapper = styled(HeaderItemWrapper)`
    width: unset;
    margin-left: auto;
    &>*{
        margin: 0 5px;
    }
`