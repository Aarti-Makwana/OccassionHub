// controllers/djController.js
import DjModel from '../model/djModel.js';
import { fileURLToPath } from 'url';
import path from 'path';
export const djManagerRegistration = async (req, res) => {
  try {
    const { businessName, equipment, price } = req.body;
    console.log("image req ================ ",req)
    console.log("req.body ================ ",req.body)



    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");
    console.log("req.body : ", req.body);
    // const { Businessname, Specialization, FoodType, ServiceCharges, userEmail } = request.body;
    console.log("req.files.docs-------------->", req.files.DjImage);
    var filename = req.files.DjImage;
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
                console.log("req.body : ", req.body);
                const newDjManager = await DjModel.create({
                    businessName,
                    gallery:fileName,
                    equipment,
                    price,
                });
                console.log("newUser : ", newDjManager);
                await newUser.save();
                response.status(201).json({ newUser: "newUser" });
            } catch (err) {
                console.error("Error in caterer registration controller: ", error);
                response.status(500).json({ status: false });
            }
        }
    }); 

    // Save DJ Manager registration data to the database
    // const newDjManager = await DjModel.create({
    //   businessName,
    //   gallery,
    //   equipment,
    //   price,
    // });

    // res.status(201).json({ message: 'DJ Manager registration successful', data: newDjManager });
  } catch (error) {
    console.error("Error in DJ Manager registration controller: ", error);
    res.status(500).json({ message: 'Error in DJ Manager registration', error: error.message });
  }
};
