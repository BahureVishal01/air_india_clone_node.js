const { Model } = require("mongoose")


const helpDetails = (req, res)=>{
    res.status(200).json({
        success: true,
        message: "successfully fetched help details.",
        data: {
            contact: "+91XXXXXXXXXX"
        }
    })
}

module.exports = {
    helpDetails
}