import con from "../../../config/db";
import moment from "moment/moment";
export default async (req, res) => {
    
        const dates = moment();
        const finaldt = dates.format("YYYY-MM-DD HH:mm:ss");
        console.log(finaldt);
    switch(req.method){
        case "POST":
            let query = await con.queryRunner(`  insert into ishausernext 
            ( code, firstname, lastname, email, gender, hobbies, photo, country , dateadded) 
   values( "${req.body.Code}" , "${req.body.Firstname}" , "${req.body.Lastname}" , "${req.body.Email}" ,
  "${req.body.Gender}" , "${req.body.Hobbies}" ,"${req.body.image}" , "${req.body.Country}" ,"${finaldt}")  `);
            res.send(query)
            break;
        default:
            break;
    }
    
};

       

   
     
