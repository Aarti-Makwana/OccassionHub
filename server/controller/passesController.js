import passesModel from "../model/passesModel.js";
import { fileURLToPath } from 'url';
import path from 'path';
export const passesDataController = async(request,response)=>{
    var __filename = fileURLToPath(import.meta.url);
    var __dirname = path.dirname(__filename).replace("\\controller", "");
    console.log("request.body : ", request.body);
    const {userEmail,passname,passesPrice,Quantity,Start_Date,last_Date} = request.body;
    console.log("request.files.docs-------------->", request.files.docs);
    var filename = request.files.docs;
    console.log("filename ---------------->  : ", filename);
    var fileName = new Date().getTime() + filename.name;
    console.log("fileName : ", fileName);

    var pathName = path.join(__dirname, "/public/assets/images/", fileName);

    // console.log("request.body : ", req.body); 
    filename.mv(pathName, async (error) => {
        if (error) {
            console.log(error);
            response.status(203).json({ message: "Error while uploading document in caterer controller" });
        }
        else {
            try {
                const formattedStartDate = formatDate(Start_Date);
                const formattedLastDate = formatDate(last_Date);
                console.log("request.body : ", request.body); 
                const passesData = await passesModel.create({
                    userEmail: userEmail,
                    passname : passname,
                    passesPrice : passesPrice,
                    Quantity : Quantity,
                    Start_Date : formattedStartDate,
                    last_Date : formattedLastDate,
                    docs : fileName
                });
                console.log("passesData : ",passesData);
                await passesData.save();
                response.status(201).json({passesData : passesData});
            } catch (error) {
                console.log("error in passes Controller.....!!"+error);
                response.status(500).json({ status: false });
            }
        }
    });
}
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
