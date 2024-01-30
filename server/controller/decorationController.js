import decorationRegistrationModel from '../model/decorationRegistrationModel.js';
import { fileURLToPath } from 'url';
import decorationRequestModel from '../model/decorationRequestModel.js';
import path from 'path';
import usermodel from "../model/usermodel.js";

export const decorationRegistration = async (request, response) => {
    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");

    console.log("request.body -----------> : ", request.body);

    const { Businessname, Decorationtype, Decorationprice, userEmail } = request.body;
    console.log("user  email -=========== -=-=-=-=-= ", userEmail);
    var filename = request.files.docs;
    var fileName = new Date().getTime() + filename.name;

    var pathName = path.join(__dirname, "/public/assets/images/", fileName);

    filename.mv(pathName, async (error) => {
        if (error) {
            console.log(error);
            response.status(203).json({ message: "Error while uploading document in decoration controller" });
        }
        else {
            try {
                const newUserData = {
                    DecorationEmail: userEmail,
                    Businessname: Businessname,
                    Decorationtype: Decorationtype,
                    Decorationprice: Decorationprice,
                    docs: fileName
                }
                const newUser = await decorationRegistrationModel.create(newUserData);
                console.log("newUser : ", newUser);
                const role = await usermodel.updateOne({ email: userEmail }, [
                    {
                        $set: {
                            role: "decoration"
                        }
                    }
                ])
               
                await newUser.save();
                response.status(201).json({ newUser: "newUser" });
            } catch (err) {
                console.error("Error in Decoration registration controller: ", err);
                response.status(500).json({ status: false });
            }
        }
    });
}
export const searchDecorationController = async (request , response)=>{
    try {
        const decorationDetails = await decorationRegistrationModel.find();
        response.status(201).json({ decorationDetails });
    } catch (error) {
        console.error("Error in decoration search: ", error);
        response.status(500).json({ error: "Error in  decoration search" });
    }
}
export const seeNormalUserTodecorationRequest = async (request, response) => {
    try {
        // request.body
        const { location, date, starttime, endtime, additionalInfo } = request.body.selectedRequest;
        const decorationEmail = request.body.decorationEmail;
        const userEmail = request.body.userEmail;
        const price = request.body.price;

        const obj = {
            location, 
            date,
            starttime,
            endtime,
            additionalInfo,
            decorationEmail,
            userEmail,
            price
        }
        console.log("request.body in seeNormalUserTodecorationRequest : ", obj);
        var result = decorationRequestModel.create(obj);
        console.log("result in seeNormalUserTodecorationRequest : " , result);
    }
    catch (error) {
        console.log("eroor : " , error);
    }
}

export const decorationSeeRequestedData = async (request , response)=>{

    console.log("rekjkhjhbsfhmn in decoration controllerrr : ", request.body);
    try {
        var decorationRequestData = await decorationRequestModel.find({decorationEmail : request.body.decorationEmail})
        // console.log("result in decoration controller :" , result);
        response.status(201).json({decorationRequestData});
    } catch (error) {
        console.log("error in see decoration request controller : " , error);
        response.status(500).json({error : "error in see decoration request controller "});
    }
}