import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #000;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 20px;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #00CED1;
        font-weight: bold;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer; 
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
