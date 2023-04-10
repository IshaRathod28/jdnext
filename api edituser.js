import con from "../../../config/db";
import moment from "moment/moment";
export default async function handler(req, res) {
    const dates = moment();
    const finaldt = dates.format("YYYY-MM-DD HH:mm:ss");
        switch(req.method){
            case "GET":
                console.log(req.query.EditID)
                let query = await con.queryRunner(`select * from ishausernext where recid ="${req.query.EditID}" `);
                res.send(query)
                break;

           case "POST":
          
                console.log("params" , req.body.Firstname);
                let query2 =  con.queryRunner(` update ishausernext   set firstname ="${req.body.Firstname}" , lastname ="${req.body.Lastname}" ,    email="${req.body.Email}" , hobbies="${req.body.Hobbies}" ,  photo="${req.body.Photo}" , gender="${req.body.Gender}" , country="${req.body.Country}" , dateupdated="${finaldt}" where code ="${req.body.Code}" `);
                res.send(query2);
                    break;
            default:
                break;
        }
        
  }
