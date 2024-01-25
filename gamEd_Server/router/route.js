import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controllers.js';

/** Questions Routes API */

// router.route('/questions')
//         .get(controller.getQuestions) /** GET Request */
//         .post(controller.insertQuestions) /** POST Request */
//         .delete(controller.dropQuestions) /** DELETE Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

router.route('/profile')
        .get(controller.getProfile)
        .post(controller.storeProfile)
        .delete(controller.dropProfile)
        .post
router.route('/leaderboard')
        .get(controller.getLeaderboard)

//doubtful 
router.route('/tinder/cards')
        .get(controller.getTinderCard)

router.route('/user')
        .post(controller.storeUser)



//hamara update score
router.route('/score')
        .post(controller.updateScore)

//hamara login
router.route('/login')
        .post(controller.checklogin)


export default router;
