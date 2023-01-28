import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './news.css'

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=48e53a38440d43bbb019ba4e612988a6")
            .then((res) => {
                console.log(res.data.articles);
                setNews(res.data.articles);
            })
    }, [])
    return (
        <>
            <div className='Container'>
                <div className='Row'>
                    {
                        news.map((val) => {
                            return (
                                <div className='Col'>
                                    <div className="card">
                                        <img src={val.urlToImage} class="card-img-top" alt="..." />
                                        <div className="card-body">
                                                
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">{val.description}</p>
                                            <a href={val.url} className="btn btn-primary">read more</a>
                                        
                                        </div>
                                        
                                                                             
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default News
