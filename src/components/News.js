import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false
    };
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f915273ce929437a88caa1529c53ad76";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
            <h1 className='my-4'>NewsApp - Top Headlines :</h1>
            <div className="row">
            {this.state.articles.map((element)=>{
              return(
                <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              );
            })}
            </div>
      </div>
    )
  }
}

export default News
