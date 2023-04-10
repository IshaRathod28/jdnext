import con from "../../../config/db";
export default async function handler(req, res) {

    
        switch(req.method){
            case "GET":
                console.log(req.query.sts);
                if(req.query.sts == 'A'){
                    let query = await con.queryRunner(`update ishausernext set status='I' where code = "${req.query.id}" `);
                    res.send(query)

                    break;
                }
                else if (req.query.sts=='I'){
                    let query = await con.queryRunner(`update ishausernext set status='A' where code = "${req.query.id}" `);
                    res.send(query)

                    break;
                }
                // break;
                
            default:
                break;
        }
        
  }
