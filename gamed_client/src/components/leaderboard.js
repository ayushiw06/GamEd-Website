// import React, { useState,useEffect } from "react";
// import '../styles/leaderboard.css';
// // import './leaderscript.js';
// import axios from 'axios'

// const Leaderboard = () => {

//   const [leaderboard, setLeaderboard] = useState([]);

//   useEffect(() => {
//     async function fetchdata(){
//       const req= await axios.get('./leaderboard');

//       setLeaderboard(req.data);
// }
// fetchdata();
//   },[])



//   return (
//     <div className="wrapper">
//       <div className="lboard_section">
//         <div className="lboard_tabs">
//           <div className="tabs">
//             <ul>
//               <li data-li="today">Today</li>
//               <li className="active" data-li="month">Month</li>
//               <li data-li="year">Year</li>
//             </ul>
//           </div>
//         </div>

//         <div className="lboard_wrap">
//           {/* <div className="lboard_item today" style={{ display: 'none' }}>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="..assets/pic_1.jpg" alt="p" />
//               </div>
//               <div className="name_bar">
//                 <p><span>1.</span> Charles hgfJohn</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '95%' }}></div>
//                 </div>
//               </div>
//               <div className="points">195 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_2.png" alt="picture_2" />
//               </div>
//               <div className="name_bar">
//                 <p><span>2.</span> Alex Mike</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '80%' }}></div>
//                 </div>
//               </div>
//               <div className="points">185 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_3.png" alt="picture_2" />
//               </div>
//               <div className="name_bar">
//                 <p><span>3.</span> Johnson</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '60%' }}></div>
//                 </div>
//               </div>
//               <div className="points">160 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_4.png" alt="picture_1" />
//               </div>
//               <div className="name_bar">
//                 <p><span>4.</span> Rosey</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '30%' }}></div>
//                 </div>
//               </div>
//               <div className="points">130 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_5.png" alt="picture_2" />
//               </div>
//               <div className="name_bar">
//                 <p><span>5.</span> Scarlett Angela</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '10%' }}></div>
//                 </div>
//               </div>
//               <div className="points">110 points</div>
//             </div>
//           </div> */}
//           <div className="lboard_item month" style={{ display: 'block' }}>
//           {leaderboard.map((user, index) => (
//           <div className="lboard_mem" key={user._id}>
//               <div className="img" >
//                 <img src={user.profileimgLink} alt="Profpic" />
//               </div>
//               <div className="name_bar">
//                 <p><span>{index+1}.</span> {user.username}</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '95%' }}></div>
//                 </div>
//               </div>
//               <div className="points">{user.points} points</div>
//             </div>
// ))}
//             {/* <div className="lboard_mem">
//               <div className="img">
//                 <img src="https://i.guim.co.uk/img/media/892fa5c71f29ce088247397726f32ca83b8231d0/79_0_3386_2031/master/3386.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b087998b9e2006c0826f07750230af84" alt="picp2" />
//               </div>
//               <div className="name_bar">
//                 <p><span>1.</span> Alex Mike</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '95%' }}></div>
//                 </div>
//               </div>
//               <div className="points">1195 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_3.png" alt="picture_3" />
//               </div>
//               <div className="name_bar">
//                 <p><span>2.</span> Johnson</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '80%' }}></div>
//                 </div>
//               </div>
//               <div className="points">1185 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_1.png" alt="picture_1" />
//               </div>
//               <div className="name_bar">
//                 <p><span>3.</span> Charles John</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '70%' }}></div>
//                 </div>
//               </div>
//               <div className="points">1160 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_5.png" alt="picture_5" />
//               </div>
//               <div className="name_bar">
//                 <p><span>4.</span> Scarlett Angela</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '50%' }}></div>
//                 </div>
//               </div>
//               <div className="points">1130 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_4.png" alt="picture_4" />
//               </div>
//               <div className="name_bar">
//                 <p><span>5.</span> Rosey</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '30%' }}></div>
//                 </div>
//               </div>
//               <div className="points">1110 points</div>
//             </div> */}
//           </div>
//           {/* <div className="lboard_item year" style={{ display: 'none' }}>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="/assets/pic_5.png" alt="picture_5" />
//               </div>
//               <div className="name_bar">
//                 <p><span>1.</span> Scarlett Angela</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '90%' }}></div>
//                 </div>
//               </div>
//               <div className="points">2195 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_4.png" alt="picture_4" />
//               </div>
//               <div className="name_bar">
//                 <p><span>2.</span> Rosey</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '85%' }}></div>
//                 </div>
//               </div>
//               <div className="points">2185 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_3.png" alt="picture_3" />
//               </div>
//               <div className="name_bar">
//                 <p><span>3.</span> Johnson</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '65%' }}></div>
//                 </div>
//               </div>
//               <div className="points">2160 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_1.png" alt="picture_1" />
//               </div>
//               <div className="name_bar">
//                 <p><span>4.</span> Charles John</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '30%' }}></div>
//                 </div>
//               </div>
//               <div className="points">2130 points</div>
//             </div>
//             <div className="lboard_mem">
//               <div className="img">
//                 <img src="pic_2.png" alt="picture_2" />
//               </div>
//               <div className="name_bar">
//                 <p><span>5.</span> Alex Mike</p>
//                 <div className="bar_wrap">
//                   <div className="inner_bar" style={{ width: '10%' }}></div>
//                 </div>
//               </div>
//               <div className="points">2110 points</div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leaderboard;



import React, { useState, useEffect } from "react";
import '../styles/leaderboard.css';
import axios from '../axios';
import BackButton from "./back";
import Footer from "./footer";

const Leaderboard = () => {

  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const req = await axios.get('./api/leaderboard');
      setLeaderboard(req.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div><BackButton/>
    <h1>LEADERBOARD</h1>
    <div className="wrapper">
      <div className="lboard_section">
        <div className="lboard_tabs">
          <div className="tabs">
            <ul>
              <li data-li="today">Today</li>
              <li className="active" data-li="month">Month</li>
              <li data-li="year">Year</li>
            </ul>
          </div>
        </div>

        <div className="lboard_wrap">
          {loading && (
            <div className="loader">Loading...</div>
          )}

          {!loading && leaderboard.length > 0 && (
            leaderboard.map((user, index) => (
              <div className="lboard_mem" key={user._id}>
                <div className="img">
                  <img src={user.profileimgLink} alt="Profpic" />
                </div>
                <div className="name_bar">
                  <p><span>{index + 1}.</span> {user.username}</p>
                  <div className="bar_wrap">
                    <div className="inner_bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="points">{user.totalpointsEarned} points</div>
              </div>
            ))
          )}

          {!loading && leaderboard.length === 0 && (
            <div className="empty_list">No leaderboard data available yet.</div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Leaderboard;






