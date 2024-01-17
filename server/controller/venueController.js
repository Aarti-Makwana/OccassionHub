import venueModel from '../model/venueRegistration.js'
import { fileURLToPath } from 'url';
import path from 'path';
export const venueRegistration = async (request, response) => {
    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");
    console.log("request.body : ", request.body);
    const { VenueName, venueLocation, venuePrice, VenueType, venueEmail } = request.body;
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
                const newUser = await venueModel.create({
                    venueEmail: venueEmail,
                    VenueName: VenueName,
                    venueLocation: venueLocation,
                    VenueType: VenueType,
                    venuePrice: venuePrice,
                    docs: fileName
                });
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

export const searchVenuController = async (request, response) => {
    try {
        const venuDetails = await venueModel.find();
        response.status(201).json({ venuDetails });
    } catch (error) {
        console.error("Error in  Venu Details search: ", error);
        response.status(500).json({ error: "Error in  Venu search" });
    }
}