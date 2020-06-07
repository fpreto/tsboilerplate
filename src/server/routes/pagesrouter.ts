
import { getManifest } from "../manifestmanager";
import { Router } from 'express';

export function pagesRouter() {
    const router = Router();

    router.get('/', async (_, res) => {
        const manifest = await getManifest();
        res.render('index.pug', { manifest: manifest });
    });

    return router;
};
