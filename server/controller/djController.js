import { fileURLToPath } from 'url';
import djRegistrationModel from '../model/djRegistrationModel.js';
import path from 'path';
export const djRegistrationContoller = async (request, response) => {
    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");
    console.log("request.body -----------> : ", request.body);
    const { Businessname, EquipmentType, Djprice, userEmail } = request.body;
    console.log("request.files.docs-------------->", request.files.docs);
    var filename = request.files.docs;
    console.log("filename ++++++++>  : ", filename);
    var fileName = new Date().getTime() + filename.name;
    console.log("fileName : ", fileName);

    var pathName = path.join(__dirname, "/public/assets/images/", fileName);

    filename.mv(pathName, async (error) => {
        if (error) {
            console.log(error);
            response.status(203).json({ message: "Error while uploading document in dj controller" });
        }
        else {
            try {
                console.log("request.body : ", request.body);
                const newUser = await djRegistrationModel.create({
                    DjEmail: userEmail,
                    Businessname: Businessname,
                    EquipmentType: EquipmentType,
                    Djprice: Djprice,
                    docs: fileName
                });
                console.log("newUser : ", newUser);
                await newUser.save();
                response.status(201).json({ newUser: "newUser" });
            } catch (err) {
                console.error("Error in Dj registration controller: ", error);
                response.status(500).json({ status: false });
            }
        }
    });
}
export const searchDjController = async(request , response)=>{
    try {
        const djDetails = await djRegistrationModel.find();
        response.status(201).json({ djDetails });
    } catch (error) {
        console.error("Error in dj search: ", error);
        response.status(500).json({ error: "Error in  dj search" });
    }
}