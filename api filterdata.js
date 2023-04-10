import con from "../../../config/db";
export default async function handler(req, res) {

    
        switch(req.method){
            case "GET":
              
                const search =  req.query.Searchdata;
                const gender = req.query.Gender;
                const hobbies = req.query.Hobbies;
                const status = req.query.Status;
                var dbquery = `select * from ishausernext where`


                if (search != '') {
                    dbquery += ` code like "%${search}%" or 
                firstname like  "%${search}%" or lastname like "%${search}%"
                 or email like "%${search}%" and `
                }
                if (gender != '') {
                    dbquery += `  gender like "%${gender}" and `
        
                }
                if (hobbies != '') {
                    dbquery += ` hobbies like "%${hobbies}%" and `
                }
                if (status != '') {
                    dbquery += `status like "%${status}%" and `
                }
        
                dbquery += `recid >0 `
          

                let query = await con.queryRunner(dbquery);
                res.send(query)
                break;
            default:
                break;
        }
        
  }





