import venueModel from '../model/venueRegistration.js'
import { fileURLToPath } from 'url';
import userBookVenue from '../model/userBookVenue.js';
import path from 'path';
export const venueRegistration = async (request, response) => {
    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");
    const { VenueName, venueLocation, venuePrice, VenueType, venueEmail } = request.body;
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
                const newUser = await venueModel.create({
                    venueEmail: venueEmail,
                    VenueName: VenueName,
                    venueLocation: venueLocation,
                    VenueType: VenueType,
                    venuePrice: venuePrice,
                    docs: fileName
                });
                await newUser.save();
                response.status(201).json({ newUser: "newUser" });
            } catch (err) {
                console.error("Error in caterer registration controller: ", error);
                response.status(500).json({ status: false });
            }
        }
    });
}

export const searchVenuController = async (request, response) => {
    try {
        const venuDetails = await venueModel.find();
        response.status(201).json({ venuDetails });
    } catch (error) {
        console.error("Error in  Venu Details search: ", error);
        response.status(500).json({ error: "Error in  Venu search" });
    }
}
export const venueBookUserController = async(request,response)=>{
    console.log("request.body  venueBookUserController: -----------> ",request.body);
    const {date,time,venuehours,userEmail,venueEmail,location} = request.body;
    try {
        var requestedDjModeldata = userBookVenue.create({
            date : date,
            time :time,
            venuehours :venuehours,
            userEmail : userEmail,
            venueEmail : venueEmail
        });
        console.log("data : ",requestedDjModeldata);
        response.status(201).json({ requestedDjModeldata:requestedDjModeldata});
    } catch (error) {
        console.error("Error in dj Book Controller: ", error);
        response.status(500).json({ error: "Error in dj Book Controller" });
    }
}