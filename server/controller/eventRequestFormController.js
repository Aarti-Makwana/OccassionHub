import requetSchema from '../model/eventRequestModel.js'
import usermodel from '../model/usermodel.js'

export const userEventRequestController = async (request, response) => {
  const { userEmail,eventname, totalguest, eventtype, budget, location, startedate, enddate, meal, addtionalinfo, serviceschoose, isdjbooked, extralocationcharge } = request.body;
  console.log("request event controller ,", request.body);
  // const userEmail = request.cookies.user;
  console.log("user email from req.body : ", userEmail);

  try {
    const user = await usermodel.findOne({ email: userEmail });

    console.log("user Data in try : " , user);

    var requetSchemaForm = await requetSchema.create({
      userid: user._id,
      eventname: eventname,
      totalguest: totalguest,
      eventtype: eventtype,
      budget: budget,
      location: location,
      startedate: startedate,
      enddate: enddate,
      meal: meal,
      addtionalinfo: addtionalinfo,
      serviceschoose: serviceschoose,
      // isdjbooked:isdjbooked,
      // extralocationcharge:extralocationcharge
    });

    console.log("requetSchemaForm on controller ", requetSchemaForm)
    response.status(201).json(requetSchemaForm);
  } catch (error) {
    console.log("Error in user Event Form controller", error);
    response.status(500).json('Error');

  }
}

export const profileController = async (request, response) => {
  var userEmail = request.body.userEmail;
  console.log("userEmail on controller ", userEmail);
  try {
    const userDetails = await usermodel.findOne({ email: userEmail });
    console.log("userDetails on controller ---------->", userDetails);
    response.status(201).json({ userDetails });
  } catch (error) {
    console.error("Error in profileController: ", error);
    response.status(500).json({ error: "Error in profileController" });
  }
}
