import { Router, Request, Response } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/', PageController.dogs);
router.get('/', PageController.cats);
router.get('/', PageController.fishies);

router.get('/search', SearchController.search);

//Route Not Afound
router.use((req: Request, res: Response) => {
    res.send('Página não encontrada!');
})



export default router;