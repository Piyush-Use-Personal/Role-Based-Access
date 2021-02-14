import Authentication from './../lib/Authentication.js';

class MyBank {
    login = (req, res, next) => {
        const userTypes = ['admin', 'agent', 'customer'];
        let currentUserType = userTypes[Math.floor(Math.random() * userTypes.length)];
        let payload = {
            id : 'your unique id',
            // some more user related data 
        }
        let token = Authentication.generateToken(currentUserType, payload)
        res.status(200).send({
            message: 'Login Successful!',
            token : token,
            role: currentUserType
        })
    }

    getAccount = (req, res) => {
        res.status(200).send({
            message: 'Fetch data',
        })
    }

    updateAccount = (req, res) => {
        res.status(200).send({
            message: 'Data Updated',
        })
    }

    approveAccount = (req, res) => {
        res.status(200).send({
            message: 'Account Approved',
        })
    }

}
export default new MyBank();