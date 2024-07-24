import image from "../assets/news.jpg"
const NewsItem = ({title,description, src,url})=> {
    return (
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light h-100">
          <img src={src?src:image} style={{ height: "250px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="News" />
            <div className="card-body">
              <h5 className="card-title">{title.slice(0, 50)}</h5>
              <p className="card-text">
                {description ? description.slice(0, 90) : "Stay informed with the latest headlines and breaking news stories from around the world."}
              </p>
              <a href={url} className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      )
    }

export default NewsItem