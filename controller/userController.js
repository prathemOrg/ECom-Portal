import userModel from '../model/userModel';
const Express = require ('express');


const router = Express.Router()
const data = 
    {
        userroleid: 1, username: "Sam", firstname: "Sambhaji", middlename: "Madan", lastname: "Mange",
        email: "sambhaji08081998@gmail.com", mobile: 7208693598, gender: 0, address: "ABCD Address Malad West", password: "Sam@1999"
    }
    // {
    //     userroleid: 2, username: "Pratham", firstname: "Prathamesh", lastname: "Sangle", email: "prathem@gmail.com",
    //     mobile: 9359872086, gender: 1, address: "prathem Address Malad West", password: "Prathem@1999"
    // }

router.post('/register', saveUser)
const saveUser = async (req, res) => {
    req.body = data
    const { userroleid, username, firstname, middlename, lastname, email, mobile, gender, address, password } = req.body
    let Isexist = userModel.findOne({ email })
    if (!Isexist) {
        const newUser = await new userModel().save().then(
            res.status(200).Json("message : User Added Successfully")).catch(error => {
                console.log(error)
                res.status(400).Json()
            })
    }
    else {
        res.status(400).Json("message : User already Exist")
    }
}

export default saveUser;