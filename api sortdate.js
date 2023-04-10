import con from "../../../config/db";
export default async function handler(req, res) {

    
        switch(req.method){
            case "GET":
                let query = await con.queryRunner(`select * from ishausernext  where stt='A' order by dateadded `);
                res.send(query)
                break;
                case "POST":
                    let query2 = await con.queryRunner(`select * from ishausernext  where stt='A' order by dateadded desc  `);
                    res.send(query2)
                break;
            default:
                break;
        }
        
  }
