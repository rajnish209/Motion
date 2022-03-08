import {useState , useEffect} from "react";
import"./Home.css";
import {Link} from 'react-router-dom'
function Home() {
const[val , setVal] = useState([]);
const[search , setSearch] =useState();

 let div = document.getElementById('video-div');

  async function searchvideo() {
      let video = document.getElementById("video").value;
 let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyBXb9BMTssU9PrUIeIpdXwu17ndSaE0EJA&maxResults=20`)
 let data = await res.json();
// console.log("data:" , data);
let videoId;
 for({
    id :{videoId} 

 }of data.items) {
  
// for(let i =0;i< data.items.length;i++)

    // console.log(videoId);
 //videoId = id.videoId;
//console.log(videoId);
    let video_frame = document.createElement("iframe");
     
    video_frame.src = `http://www.youtube.com/embed/${videoId}`;
      
    video_frame.allow = `fullscreen`;

    setVal(video_frame)   
 }
}

// res1 =val[0];
console.log(val);
  return (
    <>
    {/* <div className="App">
      <div className={styles.navbar}>
        <h1 className={styles.navbartitle}>ValueEnable</h1>
        <div className={styles.addemployees}>
         <Link to ="/register"> <button className={styles.button}>Signup</button></Link>
         <Link to="/login"> <button className={styles.button}>Login</button></Link>
        </div>
        </div>
      */}
          <div className="header">
      <div className="header__left">
        <i id="menu" className="material-icons">menu</i>
        <img
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt=""
        />
      </div>

      <div className="header__search">
       
          <input id="video" type="text" placeholder="Search"  ></input>
           <button  onClick={searchvideo} >search</button>  
        
      </div>

      <div className="header__icons">
        <i className="material-icons display-this">search</i>
        <i className="material-icons">videocam</i>
        <i className="material-icons">apps</i>
        <i className="material-icons">notifications</i>
        <i className="material-icons display-this">account_circle</i>
      </div>
    </div>
    

    
    <div className="mainBody">
      
      <div className="sidebar">
        <div className="sidebar__categories">
          <div className="sidebar__category">
            <i className="material-icons">home</i>
            <span>Home</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">local_fire_department</i>
            <span>Trending</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">subscriptions</i>
            <span>Subcriptions</span>
          </div>
        </div>
        <hr />
        <div className="sidebar__categories">
          <div className="sidebar__category">
            <i className="material-icons">library_add_check</i>
            <span>Library</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">history</i>
            <span>History</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">play_arrow</i>
            <span>Your Videos</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">watch_later</i>
            <span>Watch Later</span>
          </div>
          <div className="sidebar__category">
            <i className="material-icons">thumb_up</i>
            <span>Liked Videos</span>
          </div>
        </div>
        <hr />
      </div>


     
       
         <div id="video-div" className="video-div">
          
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
             <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
             <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
         </div> 
 
    
     
  
          
    </div>
   
      </>    
  );
}

export default Home;
