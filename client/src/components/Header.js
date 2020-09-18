<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> 64d5f86f97c0d000ab90e120a7fb0938499c8414
import { useDispatch } from 'react-redux';
import { logoutClickevent } from '../modules/actions/changeLoginStatus';
import styled from 'styled-components';

const Nav = styled.div`
	width: 100%;
	height: 8vh;
	min-height: 50px;
	font-size: 13px;
	display: flex;
	justify-content: space-between;
`;

const LogoWrap = styled.h1`
	color: white;
	&:hover {
		color: #900c3f;
		cursor: pointer;
	}
`;

const Logo = styled.div`
	width: 40px;
	height: 40px;
	position: absolute;
	top: 20px;
	left: 20px;
	background-repeat: no-repeat;
	background-position: center center;
	background-image: url('images/Logo.png');
	background-size: cover;
`;

const LogoutBtn = styled.div`
	line-height: 5;
	padding-right: 30px;
	&:hover {
		color: #900c3f;
		cursor: pointer;
	}
`;

const Header = () => {
	const dispatch = useDispatch();
	const logo = useRef(null);

	useEffect(() => {
		logo.current.style.cssText = `background-image: url('images/Logo.png')`;
	}, []);
	return (
		<Nav>
			<LogoWrap>
				<Logo ref={logo}></Logo>
			</LogoWrap>
			<LogoutBtn
				onClick={() => {
					localStorage.removeItem('token');
					dispatch(logoutClickevent());
				}}
			>
				LOGOUT
			</LogoutBtn>
		</Nav>
	);
};

export default Header;
