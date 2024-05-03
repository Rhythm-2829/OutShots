import React, {useState, useEffect}from 'react'
import Newsi from './Newsi';

const Newsb = ({category}) => {

    const[articles,setArticles] = useState([]);

    useEffect(()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=acc57ee2b0ce4864ad85513a02311f51`;
            fetch(url).then(response=> response.json()).then(data=> {
                console.log(data);
                setArticles(data.articles);
            });
    }, [articles])
    
  return (
    <div>
        <h2 className="text-center">Latest<span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <Newsi key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
})}
    </div>
  )
}

export default Newsb
