import styled from "styled-components";
import Constants from '../../constants';

export const HeaderNav = styled.nav`
    background-color: ${Constants.COLOR.PRIMARY_COLOR};
    color: white;
    padding: 10px 0;
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width :70%;
    max-width: 1200px;
    margin: 0 auto;
`

export const HeaderItemWrapper = styled.div`
    display: flex;
`