import con from "../../../config/db";
export default async function handler (req, res){
    switch(req.method){
        case "GET":
        console.log("delete id " , req.query.id);
        let query = await con.queryRunner(`update ishausernext set stt='I' where recid ="${req.query.id}" `);
        res.send(query);
             break ;

        default: 
        break;

    }
    
}
// export default async function handler(req, res) {

    
//     switch(req.method){
//         case "GET":
//             let query = await con.queryRunner(`select * from ishausernext`);
//             res.send(query)
//             break;
//         default:
//             break;
//     }
    
// }

