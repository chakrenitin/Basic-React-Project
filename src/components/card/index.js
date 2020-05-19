import React,{useState,useEffect} from 'react'
import "./style.css"
import str from "../../data/blog.json"
import { NavLink } from 'react-router-dom'
function Card(props) {

    const postList = str.data.map(
        posts => 
            <NavLink to={`/${posts.postId}`}>
                <div>
                    <h6><b>{posts.stat}</b></h6><br/>
                    <h7><i>{posts.posted}</i></h7><hr/>
                </div>
            </NavLink>
        );
    
    const [img, setimg] = useState("1.png");        
    const [post , setPost] = useState({
        "postId" : "1",
        "stat" : "Fitness mantra of life & some other things",
        "posted" : "16th Dec 2018",
         "imgLink": "1.png"
    })
    
        useEffect(() => {
            if(props.imgLink!=null)
            {
                setimg(props.imgLink+".png"); 
                const post1 = str.data.find(posts => posts.postId == props.imgLink);
                setPost(post1);
            }
        },props.imgLink)

    switch (props.name) {
        case "0":
            return (
                <div className="card mt-4 text-center justify-content-center align-items-center">
                    <h4>About us</h4>
                    <div className="aboutImg">
                    <img src={require('../../img/main.png')} alt ="nitin" className="img-responsive img-fluid"/>
                    </div>
                    <h7>
                        nitn sjfdk fjisifekw fjsdlkjfiej fdsjafijd nfkdsjaldf fjidlsajkfdsj idfjlksjf isjfkdsjf idfksdjf 
                    </h7>
                </div>
            )
        case "1":
            return(
                <div className="card mt-4 text-center justify-content-center align-items-center">
                     Social media
                </div>
            )
        case "2":
            return(
                <div className="card mt-4 justify-content-center align-items-center">
                    <i>posted on {post.posted}</i><br/>
                    <h3><b>{post.stat}</b></h3>
                    <img src={require(`../../img/${img}`)} alt ="nitin" className="img-responsive img-fluid"/>
                    jflksdjlfjsdlfjsljflsdjflkkfdslkjfklsn jfsjdlfjsldj jflsdjflj ljsdlfjsjifjn jfnslfj jfjfjfj jfsdjf niknfksj fnsf j
                    
                </div>
            )
            break;
        case "3":
            return(
                <div className="card mt-4 text-center justify-content-center align-items-center">
                    contact us
                </div>
            )
            break;
        case "4":
            return(
                <div className="card mt-4 text-center justify-content-center align-items-center">
                    <h5>RECENT POST</h5>
                    {postList}
                </div>
            )
            break;
        default:
            return(
                <div>
                    hello
                </div>
            )
            break;
    }
    
}

export default Card;
