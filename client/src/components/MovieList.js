import React, { useState, useEffect } from 'react';
import Poster from './Poster';
import { moviesApi } from '../containers/moviesApi';
import Section from './Section';
import NewModal from './Modal';
import styled from 'styled-components';

const Container = styled.div`
	padding: 15px;
`;
const MovieList = ({ setDetailAction, changeModalTrue, changeModalFalse }) => {
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		moviesApi.nowPlaying().then((response) => {
			setMovie(response);
			console.log(response);
		});
	}, []);

	return (
		<>
			<NewModal changeModalFalse={changeModalFalse}></NewModal>
			<Container>
				<Section title="Now Playing">
					{movie?.data.results.map((movie, index) => {
						let listMovie = {
							id: movie.id,
							poster_path: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
							original_title: movie.original_title,
							release_date: movie.release_date,
							runningTime: movie.runningTime,
							vote_average: `${movie.vote_average} /10`,
							overview: movie.overview,
						};
						return (
							<Poster
								setDetailAction={setDetailAction}
								key={index}
								movie={listMovie}
								changeModalTrue={changeModalTrue}
							></Poster>
						);
					})}
				</Section>
			</Container>
		</>
	);
};
export default MovieList;
