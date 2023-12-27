import requetSchema from "../../model/eventRequestModel.js";

export const userEventRequestController = async(request,response)=>{
  const{eventname,totalguest,eventtype,budget,location,startedate,enddate,meal,addtionalinfo, serviceschoose,isdjbooked,extralocationcharge} = request.body;
  console.log("request event controller ,",request.body);
  try{
    var requetSchemaForm = await requetSchema.create({
      eventname:eventname,
      totalguest:totalguest,
      eventtype:eventtype,
      budget:budget,
      location:location,
      startedate:startedate,
      enddate:enddate,
      meal:meal,
      addtionalinfo:addtionalinfo,
      serviceschoose: serviceschoose,
      // isdjbooked:isdjbooked,
      // extralocationcharge:extralocationcharge
    });
    response.status(201).json(requetSchemaForm);
  }catch(error){
    console.log("Error in user Event Form controller",error);
    response.status(500).json('Error');
  
  }
}