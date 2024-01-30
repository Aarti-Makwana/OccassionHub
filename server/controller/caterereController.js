import catererRegistrationModel from "../model/catererRegistrationModel.js";
import usermodel from "../model/usermodel.js";
import { fileURLToPath } from 'url';
import path from 'path';
import customiseThaliModel from "../model/customiseThaliModel.js";

export const caterrerRegistration = async (request, response) => {
    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");
    const { Businessname, Specialization, FoodType, ServiceCharges, userEmail } = request.body;
    var filename = request.files.docs;
    var fileName = new Date().getTime() + filename.name;

    var pathName = path.join(__dirname, "/public/assets/images/", fileName);

    filename.mv(pathName, async (error) => {
        if (error) {
            console.log(error);
            response.status(203).json({ message: "Error while uploading document in caterer controller" });
        }
        else {
            try {
                const newUser = await catererRegistrationModel.create({
                    catererEmail: userEmail,
                    Businessname: Businessname,
                    Specialization: Specialization,
                    FoodType: FoodType,
                    ServiceCharges: ServiceCharges,
                    docs: fileName
                });
               

                const role = await usermodel.updateOne({ email: userEmail }, [
                    {
                        $set: {
                            role: "catrer"
                        }
                    }
                ])
               
                await newUser.save();

                response.status(201).json({ newUser: "newUser" });
            } catch (err) {
                console.error("Error in caterer registration controller: ", error);
                response.status(500).json({ status: false });
            }
        }
    });
}

export const searchCatrerController = async (request, response) => {
    try {
        const catererDetails = await catererRegistrationModel.find();
        response.status(201).json({ catererDetails });
    } catch (error) {
        console.error("Error in cateres search: ", error);
        response.status(500).json({ error: "Error in  cateres search" });
    }
}

export const seeNormalUserToCatereRequestController = async (request, response) => {
    try {
        const { location, date, time, totalguest, additionalInfo, Roti, Sabji, Dessert, Starter } = request.body.selectedDish;
        var userEmail = request.body.userEmail;
        console.log("user email aartiiiii  gav wali ======== ",userEmail);
        const userData = await usermodel.findOne({ email: request.body.catererEmail });
        const catereBusinessName = await catererRegistrationModel.findOne({catererEmail:request.body.catererEmail});
        const detailsOfNormalUserRequestForCateres = await customiseThaliModel.create({
            catereid: userData._id,
            userEmail: userEmail,
            catereBusiness:catereBusinessName.Businessname,
            location: location,
            date: date,
            time: time,
            totalguest: totalguest,
            requirments: [{
                Roti: Roti,
                Sabji: Sabji,
                Dessert: Dessert,
                Starter: Starter,
            }],
            addtionalmenu: additionalInfo,
        });

        await detailsOfNormalUserRequestForCateres.save();
        response.status(201).json({ detailsOfNormalUserRequestForCateres });
    } catch (err) {
        console.error("Error in see Normal User To Catere RequestController: ", err);
        response.status(500).json({ status: false });
    }
}

export const catereSeeRequestedDataController = async (request, response) => {
   
    try {
        const { catereEmail } = request.body;
        const userData = await usermodel.findOne({ email: catereEmail });
        const catereRegistrationInfo = await catererRegistrationModel.findOne({ catererEmail: catereEmail });
       
        // var allUserRequestedDataForCateres = await customiseThaliModel.find({ normaluserid: userData._id });
        var allUserRequestedDataForCateres = await customiseThaliModel.find({ catereid: userData._id });
        response.status(201).json({
            userData,
            catereRegistrationInfo,
            allUserRequestedDataForCateres
        });
    } catch (error) {
        console.log("Error in catere See Requested Data Controller", error);
        response.status(500).json({ status: false });
    }
}

export const updateCatereProfileController = async (request, response) => {
    
    const { Id, email, name, contect, address, Businessname, Specialization, ServiceCharges, FoodType, ServiceType } = request.body;
   
    try {
        const cateData = await catererRegistrationModel.updateOne({ _id: Id }, { $set: { Businessname, Specialization, ServiceCharges, FoodType, ServiceType } });
        const userData = await catererRegistrationModel.findOne({ catererEmail: email });
      
        const userData1 = await usermodel.updateOne({ email: userData.catererEmail }, { $set: { name, contect, address } });
        if (cateData && userData) {
            console.log("catere profile updated successfully");
            response.status(201).json({ message: 'User profile updated successfully' });
        } else {
            console.log("User not found or no changes made");
            response.status(404).json({ error: 'User not found or no changes made' });
        }
    } catch (error) {
        console.log("Error while updating catere profile on controller ", error);
        response.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

export const catereSendRequestTouserController = async (request, response) => {
   
    const { diseasPrice: { Price }, catereid, date } = request.body;
    try {
        var requestThaliData = await customiseThaliModel.findOne({ catereid: catereid, date: date });
        if (requestThaliData) {
            var requestThaliData1 = await customiseThaliModel.updateOne(
                { _id: requestThaliData._id },
                { $set: { Price, status: "Send" } }
            );
            response.status(201).json({ message: 'send request to user', requestThaliData: requestThaliData });
        } else {
            console.log("User not found or no changes made");
            response.status(404).json({ error: 'User not found or no changes made' });
        }
    } catch (error) {
        console.log("Error in catereSendRequestTouserController ----------->", error);
        response.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};