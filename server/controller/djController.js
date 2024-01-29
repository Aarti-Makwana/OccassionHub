import { fileURLToPath } from 'url';
import djRegistrationModel from '../model/djRegistrationModel.js';
import requestedDjModel from '../model/requestedDjModel.js';
import path from 'path';
import usermodel from '../model/usermodel.js';
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
            var userdata = await usermodel.findOne({ email: userEmail });
            console.log("userdata in dj registration controller----------> ", userdata);
            try {
                console.log("request.body : ", request.body);
                const newUser = await djRegistrationModel.create({
                    DjEmail: userEmail,
                    Businessname: Businessname,
                    EquipmentType: EquipmentType,
                    Djprice: Djprice,
                    address: userdata.address,
                    docs: fileName
                });

                const role = await usermodel.updateOne({ email: userEmail }, [
                    {
                        $set: {
                            role: "dj"
                        }
                    }
                ])
                console.log("newUser : ", newUser);
                await newUser.save();
                response.status(201).json({ newUser: "newUser" });
            } catch (err) {
                console.error("Error in Dj registration controller: ", err);
                response.status(500).json({ status: false });
            }
        }
    });
}
export const searchDjController = async (request, response) => {
    try {
        const djDetails = await djRegistrationModel.find();
        response.status(201).json({ djDetails });
    } catch (error) {
        console.error("Error in dj search: ", error);
        response.status(500).json({ error: "Error in  dj search" });
    }
}

export const djBookUserController = async(request,response)=>{
    console.log("request.body : -----------> ",request.body);
    const {date,time,djhours,userEmail,djEmail,location} = request.body;
    try {
        var requestedDjModeldata = requestedDjModel.create({
            date : date,
            time :time,
            djhours :djhours,
            location :location,
            userEmail : userEmail,
            djEmail : djEmail
        });
        console.log("data : ",requestedDjModeldata);
        response.status(201).json({ requestedDjModeldata:requestedDjModeldata});
    } catch (error) {
        console.error("Error in dj Book Controller: ", error);
        response.status(500).json({ error: "Error in dj Book Controller" });
    }
}
export const djProfileDataFindController = async(request,response)=>{
    const {djEmail} = request.body;
    try {
        var userDjdata = await usermodel.findOne({email:djEmail});
        var djData = await djRegistrationModel.findOne({DjEmail :djEmail });
        console.log("djjData in controller Profile .........!!",djData);
        response.status(201).json({ djData,userDjdata });
    } catch (error) {
        console.error("Error in dj prfile Controller: ", error);
        response.status(500).json({ error: "Error in dj prfile Controller" });
    }
}

export const seeRequetDjToUserController = async (request, response) => {
    console.log("seeRequetDjToUser request.body----->: ", request.body);
    const { DjEmail } = request.body;

    try {
        console.log("DjEmail : ", DjEmail);
        const AllRequtedData = await requestedDjModel.find({ djEmail: DjEmail });

        const userData = [];
        for (let i = 0; i < AllRequtedData.length; i++) {
            const request = AllRequtedData[i];
            const user = await usermodel.findOne({ email: request.userEmail });
            userData.push({ ...request.toObject(), user });
        }

        console.log("AllRequtedData in seeRequetDjToUserController ", userData);
        response.status(201).json({ AllRequtedData: userData });
    } catch (error) {
        console.error("Error in seeRequetDjToUserController: ", error);
        response.status(500).json({ error: "Error in seeRequetDjToUserController" });
    }
};


export const ConfirmrequestSendUserController = async (request, response) => {
    const { userEmail, date, hours,price } = request.body;
    try {
        const hourlyRate =  price;

        const djprice = hours * hourlyRate;
        console.log("djprice: ", djprice);

        console.log("userEmail in ConfirmrequestSendUserController ", userEmail);
        console.log("date in ConfirmrequestSendUserController ", date);
        const requestDjData = await requestedDjModel.findOne({ userEmail: userEmail, date: date });
        console.log("requestDjData : ", requestDjData);
        if (requestDjData) {
            const requestDjDataUpdate = await requestedDjModel.updateOne(
                { userEmail: requestDjData.userEmail },
                {
                    $set: {
                        djprice: djprice,
                        status: "pending"
                    }
                }
            );

            console.log("requestDjDataUpdate : ", requestDjDataUpdate);
            console.log("update successfully......!!");
            response.status(201).json({ message: 'send request to user', requestDjData: requestDjData });
        } else {
            console.log("User not found or no changes made");
            response.status(404).json({ error: 'User not found or no changes made' });
        }

    } catch (error) {
        console.error("Error in ConfirmrequestSendUserController: ", error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}