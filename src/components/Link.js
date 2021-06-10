import React from 'react';
// import styled from 'styled-components';

const Link = ({cName, url, title, index}) => {

    return(
        <li key={index}>
            <a className={cName} href={url}>{title}</a>
        </li>
    )
}

// const NavLink = styled.div`
//     .nav-links{
//         color: white;
//         text-decoration: none;
//         padding: 0.5rem 1rem;
//         &hover {
//             background-color: #6d76f7;
//             border-radius: 4px;
//             transition: all 0.2s ease-out;
//         }
//     }
// `;

// const NavLinkMobile = styled.div`

// `;


export default Link;