import { ERRORS, SUCCESS } from '../shared/messages.js';
import { AdmService } from '../service/adm.service.js';



const instanceOfAdm = new AdmService();



const loginAdm = async (req,res) =>{

       const { name,password } = req.body
       
       const adm = await instanceOfAdm.LoginAdmService(name,password)

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
};

const logoutAdm = async (req,res) =>{
    
    const token = req.headers['x-acess-token']


    const tokenValidation = await instanceOfAdm.LogoutAdmService(token)

    if(tokenValidation.name === 'SequelizeUniqueConstraintError'){
      return res.status(422).json({ message:`erro de logout, token ${ERRORS.ALREADY_EXIST} na blacklist`});
  }
  
    if(tokenValidation.name === 'SequelizeValidationError'){
        return res.status(422).json({ message:`erro de logout, token ${ERRORS.NOT_FOUND}`});
    }

    res
    .status(201)
    .json({message: `token ${SUCCESS.UPDATED}`, BlackListedToken: tokenValidation})

};


export { loginAdm, registerAdm, logoutAdm };