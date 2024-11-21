import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import './MovieList.css'

import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'

const MovieList = ({type, title, emoji}) => {
    const [Movies, setMovies] = useState([])
    const [filterMovies, setfilterMovies] = useState([])
    const [minRating, setminRating] = useState(0);
    const [sort, setsort] = useState({
        by: "default",
        order: "asc",
    })
    useEffect(() => {
        fetchMovies()
    }, [type])

    useEffect(() => {
        if (sort.by !== "default") {
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
            setfilterMovies(sortedMovies)
        }``
    }, [sort])

    const fetchMovies = async () => {
        const responce = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=b8d4507e288f7ac2b1fe72064ac286e7`);
        const data = await responce.json()
        // console.log(data)
        setMovies(data.results)
        setfilterMovies(data.results)
    };



    const handlefilter = (rate) => {
        if (rate === minRating) {
            setminRating(0)
            setfilterMovies(Movies)
        } else {

            setminRating(rate);
            const filtered = Movies.filter((movie) => movie.vote_average >= rate);
            setfilterMovies(filtered)
        }
    };

    const handlesort = (e) => {
        const { name, value } = e.target;
        setsort((prev) => ({ ...prev, [name]: value }));
        // or remove return code will be short
        // return {...prev, [name]: value}
        console.log(sort)
    };

    return (
        <section className="Movie_list" id={type}>
            <header className=" align_center Movie_list_header">
                <h2 className=" align_center Movie_list_heading">{title}{" "} <img src={emoji} alt={`${emoji} icon`} className='navbar_emoji' /></h2>

                <div className=" align_center movie_list_fs">

                    <FilterGroup minRating={minRating} onRatingClick={handlefilter} ratings={[8, 7, 6]} />

                    <select name="by" id="" onChange={handlesort} value={sort.by} className="movie_sorting">
                        <option value="default">SortBy</option>
                        <option value="release_date">Update</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="order" id="" onChange={handlesort} value={sort.order} className="movie_sorting">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </header>

            <div className="movie_cards">
                {
                    filterMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </section>
    )
}

export default MovieList