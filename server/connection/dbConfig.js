import mongoose from 'mongoose';
// mongoose.connect("mongodb://127.0.0.1:27017/organisationHub");
mongoose.connect("mongodb+srv://ritikbhondve:gyJRak8IdzncTEcb@cluster0.2hpsp2x.mongodb.net/OccassionHub");
//  mongoose.connect("mongodb+srv://kotharigaurav6:gaurav_kothari1992@cluster0.m0bpqsg.mongodb.net/FacultyRecruitmentSystem?retryWrites=true&w=majority");

export default mongoose;