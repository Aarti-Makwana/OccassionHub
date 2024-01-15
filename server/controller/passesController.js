import passesModel from "../model/passesModel.js"
export const passesDataController = async(req,res)=>{
    console.log("request.body : ", req.body); 
    const {userEmail,passname,passesPrice,Quantity,Start_Date,last_Date} = req.body;
    try {
        const formattedStartDate = formatDate(Start_Date);
        const formattedLastDate = formatDate(last_Date);
        console.log("request.body : ", req.body); 
        const passesData = await passesModel.create({
            userEmail: userEmail,
            passname : passname,
            passesPrice : passesPrice,
            Quantity : Quantity,
            Start_Date : formattedStartDate,
            last_Date : formattedLastDate
        });
        console.log("passesData : ",passesData);
        await passesData.save();
        res.status(201).json({passesData : passesData});
    } catch (error) {
        console.log("error in passes Controller.....!!"+error);
        res.status(500).json({ status: false });
    }
    
}
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}