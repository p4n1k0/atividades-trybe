const { User } = require('../models');

/* Esta função usa o método findAll do Sequelize para buscar todas as linhas da tabela Users
Equivale a fazer a query: SELECT * FROM Users */
const getAll = async () => {
    const users = await User.findAll();

    return users;
};

const getById = async (id) => {
    const user = await User.findByPk(id);

    return user;
};

const getByIdAndEmail = async (id, email) => {
    const user = await User.findOne({ where: { id, email } });

    return user;
};

const createUser = async (fullName, email, phoneNum) => {
    const newUser = await User.create({ fullName, email, phoneNum });

    return newUser;
};

const updateUser = async (id, fullName, email, phoneNum) => {
    const [updatedUser] = await User.update(
        { fullName, email, phoneNum },
        { where: { id } },
    );

    console.log(updateUser);
    return updateUser;    
};

const deleteUser = async (id) => {
    const user = await User.destroy(
        { where: { id } },
    );

    console.log(user);
    return user;    
};

module.exports = {
    getAll,
    getById,
    getByIdAndEmail,
    createUser,
    updateUser,
    deleteUser
};
