const User = require('../model/userModel');

const create  = async (req, res) => {

    try {

        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist =  await User.findOne({email})

        if(userExist){
            return res.status(400).json({message: "Usuario já existe na base de dados!"});
        }

        const saveData =  await newUser.save();
        
        res.status(200).json({saveData});

    } catch (error) {
        res.status(500).json({
            erro: true,
            message: error.message,
        });
    }

};

const index = async (req, res) =>{

    try {

        const userData = await User.find().sort({_id: -1});
        if(!userData || userData.length ===0){
            
            return res.status(404).json({
                message: 'Não há usuarios cadastrados!'
            })
        }

        res.status(200).json({
            message: userData
        })
        
    } catch (error) {
        res.status(500).json({
            erro: true,
            message: error.message,
        });
    }
}

const getUserById = async (req, res) =>{

    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            res.status(404).json({
                message: `Não foi encontrado nenhum usuario com esse ${id}`
            })
        }
        
        res.status(200).json( userExist );

    } catch (error) {
        res.status(500).json({
            erro: true,
            message: error.message,
        });
    }
}

const update = async (req, res) => {

    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            res.status(404).json({
                message: `Não foi encontrado nenhum usuario com esse ${id}`
            })
        }

       const updateData = await User.findByIdAndUpdate(id, req.body, {
            new : true,
        });

        res.status(200).json( updateData );

        
    } catch (error) {
        res.status(500).json({
            erro: true,
            message: error.message,
        });
    }


}

module.exports = {
    create,
    index,
    getUserById,
    update
}