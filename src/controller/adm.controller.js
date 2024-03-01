import jwt from 'jsonwebtoken';
import util from 'util';
import { ERRORS, SUCCESS } from '../shared/messages.js';
import { AdmService } from '../service/adm.service.js';
export const SECRET = "4654s465d465fg"


const instanceOfAdm = new AdmService();

const verifyJwt = async (req, res, next ) =>{
    const token = req.headers['x-acess-token']
    const verifyPromise = util.promisify(jwt.verify)

    try{
        const decoded = await verifyPromise(token, SECRET)
        req.admid = decoded.admid
        next();
    }catch(error){
        res.status(401).json({message:'não autorizado'}).end()
    }
};


const loginAdm = async (req,res) =>{

       const { name,password } = req.body
       
       const adm = await instanceOfAdm.loginAdmService(name,password)

       if(!name || !password){
        return res.json({message: 'dados faltando'})
       }

       if(adm === 'not found'){
         return   res  .status(401)  .json({message:`adm ${ERRORS.NOT_FOUND}`})
    
       }
       
       res
       .status(200)
       .json({ message : `logado com sucesso`, adm})

    
};

const registerAdm = async (req,res) =>{
    const { name, password} = req.body
    const adm = await instanceOfAdm.RegisterAdmService(name,password)

    if(!name || !password){
        return res.json({message: 'dados faltando'})
       }

    if (adm.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message:`nome de adm ${ERRORS.ALREADY_EXIST}`});
      }

    res
    .status(201)
    .json({message:`adm ${SUCCESS.CREATED}`, adm:adm})
}


export { loginAdm, verifyJwt, registerAdm}