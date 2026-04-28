import image from '../assets/news.jpg'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-5 px-2 py-2" style={{maxWidth:"350px"}}>
  <img src={src?src:image} style={{height:"210px" ,width:"330px",objectFit: "cover"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,20):"Any title is good to use"}</h5>
    <p className="card-text">{description?description.slice(0,90):"News icurrent event.It is information about something that has just happened"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
