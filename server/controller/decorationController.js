import decorationRegistrationModel from '../model/decorationRegistrationModel.js';
import { fileURLToPath } from 'url';
import path from 'path';
export const decorationRegistration = async (request, response) => {
    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");

    console.log("request.body -----------> : ", request.body);

    const { Businessname, Decorationtype, Decorationprice, userEmail } = request.body;

    console.log("request.files.docs-------------->", request.files.docs);
    var filename = request.files.docs;
    console.log("filename ++++++++>  : ", filename);
    var fileName = new Date().getTime() + filename.name;
    console.log("fileName : ", fileName);

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