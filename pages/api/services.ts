import { services } from './../../data';
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

    console.log(services);
    
    res.status(200).json({services})
}