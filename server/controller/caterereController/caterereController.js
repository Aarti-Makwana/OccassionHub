import mailer from "./mailer.js";

import catertermodel from "../model/catertermodel.js";
export const caterereotpContoller = async (request, response) => {
    try {
        const email = request.body.cartrerEmail;
        console.log(" dknnfhiakjv ,mnkdfl ", email);
        console.log("catrererEmail : ", request.body.cartrerEmail);
        mailer(request.body.cartrerEmail, (status, Rotp) => {
            if (status) {
                console.log("email send Caterere")
                console.log("otp : " + Rotp);
                response.status(201).json({ status: true, Rotp: Rotp });
            } else {
                console.log("Error in user OTP generation : ")
                response.status(500).json({ status: false });
            }
        });

    } catch (error) {
        console.log("Error in caterer OTP generation : ")

        response.status(500).json({ status: false });
    }
}

export const caterrerRegistration = async (request, response) => {
    try {
        console.log("request.body : ", request.body);
        const newUser = await catertermodel.create({
            catererEmail: request.body.userCookieEmail,
            Businessname: request.body.catererDataForRegistation.Businessname,
            Specialization: request.body.catererDataForRegistation.Specialization,
            FoodType: request.body.catererDataForRegistation.FoodType,
            ServiceCharges: request.body.catererDataForRegistation.ServiceCharges
        });
        console.log("newUser : ", newUser);
        await newUser.save();
        response.status(201).json({ newUser: newUser });
        console.log("caterer registration ho gya")
    } catch (error) {
        console.error("Error in user registration controller: ", error);
        response.status(500).json({ status: false });
    }
}