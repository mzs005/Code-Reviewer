const { response } = require('../app');
const aiService = require('../services/ai.services');


module.exports.getReview = async function (req, res){
    const code = req.body.code;
    if(!code){
        return res.status(400).send("Code is required")
    }

    const response = await aiService(code);
    res.send(response)
}