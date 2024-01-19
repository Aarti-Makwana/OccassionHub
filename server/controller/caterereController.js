import catererRegistrationModel from "../model/catererRegistrationModel.js";
import usermodel from "../model/usermodel.js";
import customiseThaliModel from "../model/customiseThaliModel.js";

import { fileURLToPath } from 'url';
import path from 'path';
export const caterrerRegistrationController = async (request, response) => {
    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");
    console.log("request.body : ", request.body);
    const { Businessname, Specialization, FoodType, ServiceCharges, userEmail } = request.body;
    console.log("request.files.docs-------------->", request.files.docs);
    var filename = request.files.docs;
    console.log("filename ++++++++>  : ", filename);
    var fileName = new Date().getTime() + filename.name;
    console.log("fileName : ", fileName);

    var pathName = path.join(__dirname, "/public/assets/images/", fileName);

    filename.mv(pathName, async (error) => {
        if (error) {
            console.log(error);
            response.status(203).json({ message: "Error while uploading document in caterer controller" });
        }
        else {
            try {
                console.log("request.body : ", request.body);
                const newUser = await catererRegistrationModel.create({
                    catererEmail: userEmail,
                    Businessname: Businessname,
                    Specialization: Specialization,
                    FoodType: FoodType,
                    ServiceCharges: ServiceCharges,
                    docs: fileName
                });

                const role = await usermodel.updateOne({email: userEmail},[
                    {
                       $set :{
                            role:"catrer"
                       }
                    }
                ])
                console.log("newUser : ", newUser);
                await newUser.save();
                response.status(201).json({ newUser: "newUser" });
            } catch (err) {
                console.error("Error in caterer registration controller: ", error);
                response.status(500).json({ status: false });
            }
        }
    });
}

export const searchCatrerController = async(request,response) =>{
  try {
    const catererDetails = await catererRegistrationModel.find();
    response.status(201).json({ catererDetails });
  } catch (error) {
    console.error("Error in cateres search: ", error);
    response.status(500).json({ error: "Error in  cateres search"});
  }
}

export const seeNormalUserToCatereRequestController = async (request,response) =>{
    try {
        console.log("seeNormalUserToCatereRequestController data",request.body);
        const {location,date,time,Roti,Sabji,Dessert,Starter,additionalInfo} = request.body;
        const detailsOfNormalUserRequestForCateres = await customiseThaliModel.create({
            location:location,
            date: date,
            time: time,
            requirments:[{
                Roti:Roti,
                Sabji:Sabji,
                Dessert:Dessert,
                Starter:Starter,
            }],
            addtionalmenu:additionalInfo,
        });
        await detailsOfNormalUserRequestForCateres.save();
        response.status(201).json({detailsOfNormalUserRequestForCateres});
    } catch (err) {
        console.error("Error in see Normal User To Catere RequestController: ", error);
        response.status(500).json({ status: false });
    }

}