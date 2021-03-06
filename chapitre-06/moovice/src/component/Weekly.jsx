import React from 'react';

class Weekly extends React.Component {

    constructor() {
        super()

        this.state = {
            movies: [],
            page: 1
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084")
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movies: response.results
                })
            })

        window.addEventListener('scroll', function (e) {
            if ((e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop) === e.target.scrollingElement.clientHeight) {
                component.forceUpdate(callback)
            }
        })
    }

    componentDidUpdate() {
        let currentPage = this.state.page || 1
        let newPage = currentPage + 1
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bf01af8f5d704591a09edcc0c2f5e084" + "&page=" + newPage)
            .then(res => res.json())
            .then(response => {

                const allMovies = this.state.movies
                allMovies.push(response.results)

                this.setState({
                    movies: allMovies,
                    page: this.state.page + 1
                })
            })
    }

    render() {


        return (
            <div>
                <h1>Popular</h1>

                <div>
                    {this.state.movies.map(elem => {
                        return <Card image={"https://image.tmdb.org/t/p/w500" + elem.poster_path}
                            title={elem.title}
                            year={elem.release_date}
                            description={elem.overview} />
                    })}
                </div>
            </div>
        )
    }

    
    render() {

        return (
            <div>
                <h1>Weekly</h1>

            </div>
        )
    }
}

export default Weekly;