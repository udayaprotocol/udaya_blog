import logo from './logo.svg';
import './App.css';
import BottomTabbar from './component/bottom-tabbar'; 
import NewsCard from './component/news-card';

function App() {
  return (
    <div className="App">
  
      <NewsCard
        avatar="https://pbs.twimg.com/profile_images/1713929852385132544/CvKj1vbm_normal.jpg"
        title="Data Buffets LoL Update #4: Stack Sats with the New & Improved Service Provider Template + More"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Loolor sit amet, consectetuolor sit amet, consectetuolor sit amet, consectetuolor sit amet, consectetu rem ipsum dolor sit amet, consectetur adipiscing elit."
      />
       <NewsCard
        avatar="https://pbs.twimg.com/profile_images/1713929852385132544/CvKj1vbm_normal.jpg"
        title="Data Buffets LoL Update #4: Stack Sats with the New & Improved Service Provider Template + More"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Loolor sit amet, consectetuolor sit amet, consectetuolor sit amet, consectetuolor sit amet, consectetu rem ipsum dolor sit amet, consectetur adipiscing elit."
      />
 

      <BottomTabbar/>
    </div>
  );
}

export default App;
