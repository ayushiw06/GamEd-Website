// import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/questionAnswerdata.js'
import Profiles from "../models/ProfileSchema.js";

/** get all questions */
// export async function getQuestions(req, res){
//     try {
//         const q = await Questions.find();
//         res.json(q)
//     } catch (error) {
//         res.json({ error })
//     }
// }

// /** insert all questinos */
// export async function insertQuestions(req, res){
//     try {
//         Questions.insertMany({ questions, answers }, function(err, data){
//             res.json({ msg: "Data Saved Successfully...!"})
//         })
//     } catch (error) {
//         res.json({ error })
//     }
// }

// /** Delete all Questions */
// export async function dropQuestions(req, res){
//    try {
//         await Questions.deleteMany();
//         res.json({ msg: "Questions Deleted Successfully...!"});
//    } catch (error) {
//         res.json({ error })
//    }
// }

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeResult(req, res){
   try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
        })

   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}


// my code for updating profile
export async function getProfile(req, res){
    try {
        const r = await Profiles.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeProfile(req, res){
   try {
        const { username,password,userEmail,profileimgLink, totalpointsEarned,quizesTaken,challengesWon,courseCompleted,linkedinlink } = req.body;
        if(!username && !password) throw new Error('Data Not Provided...!');

        const data = {
            username,
            password,
            userEmail,
            profileimgLink,
            totalpointsEarned,
            quizesTaken,
            challengesWon,
            courseCompleted,
            linkedinlink,
          };
      
          const result = await Profiles.create(data);
            res.json({ msg : "Profile Saved Successfully...!"});
    

   } catch (error) {
        res.json({error})
   }
}
export async function storeUser(req, res){
   try {
        const {username,password,userEmail} = req.body;
        if(!userEmail && !password) throw new Error('Data Not Provided...!');

        const data = {
            username,
            password,
            userEmail,
          };
      
          const result = await Profiles.create(data);
            res.json({ msg : "User Registered Successfully...!"});
    

   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
export async function dropProfile(req, res){
    try {
        await Profiles.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}
//my leaderboard function
export async function getLeaderboard(req,res){
    try {
      const leaderboard = await Profiles.find()
        .sort({  totalpointsEarned: -1 })
        .limit(5);
      res.json(leaderboard);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }

//getting tindercards funciton
export async function getTinderCard(req, res){
    try {
        const leaderboard = await Profiles.find()
        .sort({  totalpointsEarned: -1 })
        .limit(5);
      res.json(leaderboard);
      } catch (err) {
        res.status(500).json({ error: 'Server error' });
      }
}


export async function updateScore(req,res){
    try{        const{username,newScore}=req.body;
        const existingProfile = await Profiles.findOne({ username });

        if (!existingProfile) {
          return res.status(404).json({ error: 'User not found' });
        }
        console.log(newScore);
        console.log(existingProfile.totalpointsEarned)
        var updatedScore = newScore + existingProfile.totalpointsEarned;
        console.log(newScore);
        console.log(existingProfile.totalpointsEarned)
        console.log(updatedScore)
        await Profiles.findOneAndUpdate({username},{totalpointsEarned:updatedScore});//logic lagaya h
        res.status(200).json({ message: 'Score updated successfully' });
    }
    catch (error) {
        console.log("eorr")
        res.status(500).json({ error: 'Internal server error' });
      }
    
}


export async function checklogin(req,res){
  try{
    const { username, password } = req.body;

  // Find the user by username
  const user = await Profiles.findOne({ username });

  // Check if the user exists and the password matches (you should hash and compare passwords in production)
  if (user && user.password === password) {
    // Authentication successful
    res.json({ message: 'Login successful' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Login failed' });
  }
  }
  catch (error) {
    console.log("eorr")
    res.status(500).json({ error: 'Internal server error' });
  }
  

}