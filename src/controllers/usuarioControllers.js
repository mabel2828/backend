const usuarioModel = require('../models/usuarioModel')


class usuarioControllers {

    constructor() {
        Object.preventExtensions(this);
    }


    fetchUsers = async (req, resp) => {
        // let data = await usuarioModel.fetchUsersAll();
        let data = [{ nombre:"Jose", apellido:"MArcos", direccion:"Garibaldi", email:"jordygalind0413@gmail.com", contraseña:"1234"}]
        resp.status(200).json(data);
    }


    createUsers = async (req, resp) => {
        // Lógica para crear usuarios
        // let record = await usuarioModel.createUsers(req.body);
        let record = "createUsers funcionando"
        console.log(record);
        resp.status(200).json(record);

    }

    updateUsers = async (req, resp) => {
        let data = [{ nombre:"Jordy", apellido:"Galindo", direccion:"Garibaldi", email:"jordygalind0413@gmail.com", contraseña:"1234"}]
        resp.status(200).json(data);
        // try {
        //     // Lógica para actualizar usuarios
        //     let record = await usuarioModel.updateUsers(req.params.id_usuario, req.body);
        //     if (record) {
        //         resp.status(200).json({ message: 'Usuario actualizado', record });
        //     } else {
        //         resp.status(404).json({ message: 'Usuario no encontrado' });
        //     }
        // } catch (error) {
        //     resp.status(500).json({ message: 'Error actualizando usuario', error: error.message });
        // }
    };



    deleteUsers = async (req, resp) => {
      
        let data = [{ nombre:"Jordy", apellido:"Galindo", direccion:"Garibaldi", email:"jordygalind0413@gmail.com", contraseña:"1234"}]
        resp.status(200).json(data);
        // let deletedCount = await usuarioModel.deleteUser(req.params.id_usuario);
    
        // resp.status(200).json({
        //     message: `User with ID ${req.params.id_usuario} deleted successfully`,deletedCount});
        }

}

module.exports = {
    usuarioControllers,
    usuarioModel
};
