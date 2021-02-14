import Authentication from './../lib/Authentication.js';
class AuthRoles {
    
    Authenticate = async (req, res, next, role) => {
        try {
            let decode = await Authentication.authenticate(req.headers.authorization, role)
            req.user = decode;
            next();
        } catch (error) {
            if(error.name == 'TokenExpiredError'){
                res.status(498).send({
                    message : 'Your token is expired!'
                })
            } else {
                res.status(401).send({
                    message : 'Unauthorized!'
                })
            }
        }
    }
    Customer = (req, res, next) => {
        this.Authenticate(req, res, next, 'customer')
    }
    Agent = (req, res, next) => {
        this.Authenticate(req, res, next, 'agent')
    }
    Admin = (req, res, next) => {
        this.Authenticate(req, res, next, 'admin')
    }
}
export default new AuthRoles()