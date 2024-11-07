import { Request, Response } from 'express';
import { Product } from '../models/Product';
import {sequelize} from '../instances/mysql'
import {User} from '../models/User'
import {Op} from 'sequelize'

export const home = async (req: Request, res: Response)=>{

    await User.destroy({
        where:{
            age:{
                [Op.lte]:18
            }
        }
    })


   /* await User.update({age:18},{

        where:{
            //atualizar idade paara 18 em quem tem menos de 18 anos
            age:{
                [Op.gt]:18
            }
        }
    }) */

   // let users = await User.findAll()

    

   // console.log("USUÁRIOS: ",JSON.stringify(users))

    //criando um usuario no banco
    //const user = User.build({
    //    name: 'Naruto',
    //    age:15
    //})

    //salvando usuario no banco


    //const user = await User.create({
    //    name:"Smilinguido",
    //    age:15
    //})

    //await user.save()
    
    
    let users = await User.findAll()
   // console.log("USUARIOS: ",JSON.stringify(users))

    res.render('pages/home', {
       users
    });
};

export const novoUsuario = async(req:Request, res:Response) => {
    let users = await User.findAll();
    
    let name = req.body.name
    let age = parseInt(req.body.age)

    if(name && age){
        const newUser = User.build({
            name,
            age
        })

        await newUser.save()
    }
    res.redirect('/')
}