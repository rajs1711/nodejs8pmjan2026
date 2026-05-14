

const validateSignupData = async (req, res, next) => {
    const { name, email, mobile } = req.body;

    if (!name || !email || !mobile) {
        return res.json({
            msg: "Invalid Data",
            status: 400,
        });
    }
    if (name.length < 2) {
        return res.json({
            msg: "Invalid Data , Name length must have two or more than two characters",
            status: 400,
        });
    }
    if (!email.includes("@")) {
        return res.json({
            msg: "Invalid Data,Invalid Email Address",
            status: 400,
        });
    }
    if (mobile.length != 10) {
        return res.json({
            msg: "Invalid Data,Invalid Mobile Number",
            status: 400,
        });
    }

    next();
  
};

module.exports={validateSignupData}


