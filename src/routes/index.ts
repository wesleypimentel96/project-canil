import { Router, Request, Response } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);

//Route Not Afound
router.use((req: Request, res: Response) => {
    res.render('pages/404');
})



export default router;