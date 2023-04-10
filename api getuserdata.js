import con from "../../../config/db";
export default async function handler(req, res) {

    
        switch(req.method){
            case "GET":
                let query = await con.queryRunner(`select * from ishausernext where stt="A" `);
                res.send(query)
                break;
            default:
                break;
        }
        
  }
