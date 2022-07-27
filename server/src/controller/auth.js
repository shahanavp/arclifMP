require('dotenv').config();
//for fast2sms
const fast2sms = require('fast-two-sms')
const fast2smsKey = process.env.SMS_FAST2SMS;
//login model
const Logindata = require('../models/register');
//for twillio
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
// const twilioNum = process.env.TWILIO_PHONE_NUMBER;

const crypto = require('crypto');
const smsKey = process.env.SMS_SECRET_KEY;
const jwt = require('jsonwebtoken');

const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
let refreshTokens = [];
    
//<!==================Login/Register ===========================/>//


const login = (req, res) => {
    try {
        // console.log("login reached")
        if (req.body.phonenumber) {
            
            const phone = req.body.phonenumber;
            const otp = Math.floor(100000 + Math.random() * 900000);
            const ttl = 2 * 60 * 1000; //2minutes
            const expires = Date.now() + ttl;
            const data = `${phone}.${otp}.${expires}`;
            const hash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');
            const fullHash = `${hash}.${expires}`;
            //change
            var msg = "";
            const message = req.body.flag;

            Logindata.find({ phonenumber: phone })
                .then((response) => {
                    if (response.length == 0) {
                        msg = 'register'
                    } else { msg = 'login' }
                    console.log("msg :",msg)
                })

            setTimeout(() => {
                if (msg == message) {
                    var options = { authorization: fast2smsKey, message: `${otp}- Team ARCLIF ! `, numbers: [phone] }
                    fast2sms.sendMessage(options)
                        .then((messages) => {
                            console.log(messages)
                            res.status(200).json({ phone: phone, hash: fullHash, msg: `OTP :${otp} send successfully`, status: "200", flag: `${msg}` });
                        })
                        .catch((err) => {
                            console.error(err);
                            res.status(404).send({ msg: "Fast-2-sms error", status: "404" });
                        });
                } else {
                    res.status(200).send({ phone: phone, flag: `${msg}` });

                }
            }, 1000)
        } else {
            res.send({ msg: `phonenumber required !!` })
        }
    } catch (err) {
        res.send(err)
    }
};


//<!==================Verify OTP Login===========================/>//
const verifyLoginOTP = (req, res) => {
    try {
        if (req.body.phonenumber) {
            const phone = req.body.phonenumber;
            const hash = req.body.hash;
            const otp = req.body.otp;
            var msg = req.body.msg;

            var details = [{
                data: ""
            }];

            let [hashValue, expires] = hash.split('.');

            let now = Date.now();
            if (now > parseInt(expires)) {
                return res.send({ msg: 'Timeout. Please try again' });
            }

            let data = `${phone}.${otp}.${expires}`;
            let newCalculatedHash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');

            if (newCalculatedHash === hashValue) {
                Logindata.find({ phonenumber: phone })
                    .then((response) => {
                        if (response.length == 0) {
                            const data = {
                                uname: uname,
                                phonenumber: phone,
                                email: email,
                                roletype: roletype
                            }
                            const loginData = Logindata(data)
                            loginData.save()
                                .then((responsedata) => {
                                    msg = "register"
                                    details = [{
                                        data: responsedata
                                    }]
                                })
                        } else {
                            msg = "login"
                            details = [{
                                data: response
                            }]
                        }
                        const accessToken = jwt.sign({ data: phone }, JWT_AUTH_TOKEN, { expiresIn: '24h' });
                        const refreshToken = jwt.sign({ data: phone }, JWT_REFRESH_TOKEN, { expiresIn: '1y' });

                        refreshTokens.push(refreshToken);
                        setTimeout(() => {
                            res
                                .cookie('accessToken', accessToken, {
                                    expires: new Date(new Date().getTime() + 30 * 60 * 1000),
                                    sameSite: 'strict',
                                    httpOnly: true
                                })
                                .cookie('refreshToken', refreshToken, {
                                    expires: new Date(new Date().getTime() + 31557600000), //1 year
                                    sameSite: 'strict',
                                    httpOnly: true
                                })
                                .cookie('authSession', true, {
                                    expires: new Date(new Date().getTime() + 30 * 60 * 1000),
                                    sameSite: 'strict'
                                })
                                .cookie('refreshTokenID', true, {
                                    expires: new Date(new Date().getTime() + 31557600000),
                                    sameSite: 'strict'
                                })
                                .send({ msg: `${msg} verified`, data: details, });
                        }, 1000)
                    }).catch((err) => {

                        res.status(400).json({ msg: err.message, status: "404" });
                    })

            } else {
                console.log('not authenticated :Incorrect OTP');

                return res.json({ verification: false, msg: 'Incorrect OTP' });
            }
        } else {
            res.json({ msg: 'Incorrect input!!' });
        }
    } catch (err) {
        res.send(err)
    }
}

//<!==================Verify OTP Register ===========================/>//
const verifyOTP = (req, res) => {
    try {
        if (req.body.phonenumber) {
            const phone = req.body.phonenumber;
            const roletype = req.body.roletype;
            const uname=req.body.uname;
            const email= req.body.email;

            const hash = req.body.hash;
            const otp = req.body.otp;
            var msg = req.body.msg;

            var details = [{
                data: ""
            }];

            let [hashValue, expires] = hash.split('.');

            let now = Date.now();
            if (now > parseInt(expires)) {
                return res.send({ msg: 'Timeout. Please try again' });
            }

            let data = `${phone}.${otp}.${expires}`;
            let newCalculatedHash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');

            if (newCalculatedHash === hashValue) {
                Logindata.find({ phonenumber: phone })
                    .then((response) => {
                        if (response.length == 0) {
                            const data = {
                                uname: uname,
                                phonenumber: phone,
                                email: email,
                                roletype: roletype
                            }
                            const loginData = Logindata(data)
                            loginData.save()
                                .then((responsedata) => {
                                    msg = "register"
                                    details = [{
                                        data: responsedata
                                    }]
                                })
                        } else {
                            msg = "login"
                            details = [{
                                data: response
                            }]
                        }
                        const accessToken = jwt.sign({ data: phone }, JWT_AUTH_TOKEN, { expiresIn: '24h' });
                        const refreshToken = jwt.sign({ data: phone }, JWT_REFRESH_TOKEN, { expiresIn: '1y' });

                        refreshTokens.push(refreshToken);
                        setTimeout(() => {
                            res
                                .cookie('accessToken', accessToken, {
                                    expires: new Date(new Date().getTime() + 30 * 60 * 1000),
                                    sameSite: 'strict',
                                    httpOnly: true
                                })
                                .cookie('refreshToken', refreshToken, {
                                    expires: new Date(new Date().getTime() + 31557600000), //1 year
                                    sameSite: 'strict',
                                    httpOnly: true
                                })
                                .cookie('authSession', true, {
                                    expires: new Date(new Date().getTime() + 30 * 60 * 1000),
                                    sameSite: 'strict'
                                })
                                .cookie('refreshTokenID', true, {
                                    expires: new Date(new Date().getTime() + 31557600000),
                                    sameSite: 'strict'
                                })
                                .send({ msg: `${msg} verified`, data: details, });
                        }, 1000)
                    }).catch((err) => {

                        res.status(400).json({ msg: err.message, status: "404" });
                    })

            } else {
                console.log('not authenticated');

                return res.json({ verification: false, msg: 'Incorrect OTP' });
            }
        } else {
            res.json({ msg: 'Incorrect input!!' });
        }
    } catch (err) {
        res.send(err)
    }
}

//<!==================Home ===========================/>//
const home = (req, res) => {
    console.log('home private route');
    res.send('Private Protected Route - Home');
}
//<!==================Authenticate user ===========================/>//
async function authenticateUser(req, res, next) {
    try {
        const accessToken = req.cookies.accessToken;
        // const accessToken = req.headers.authorization.split("")[1]
        jwt.verify(accessToken, JWT_AUTH_TOKEN, async (err, phone) => {
            if (phone) {
                req.phone = phone;
                next();
            } else if (err.message === 'TokenExpiredError') {
                return res.send({
                    success: false,
                    msg: 'Access token expired'
                });
            } else {
                console.log(err);
                return res.send({ err, msg: 'User not authenticated' });
            }
        });
    } catch (err) {
        res.send(err)
    }
}
//<!==================Refresh ===========================/>//
const refresh = (req, res) => {
    try {
        // console.log('inside refresh ..')
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.json({ message: 'Refresh token not found, login again' });
        if (!refreshTokens.includes(refreshToken))
            return res.json({ message: 'Refresh token blocked, login again' });

        jwt.verify(refreshToken, JWT_REFRESH_TOKEN, (err, phone) => {
            if (!err) {
                const accessToken = jwt.sign({ data: phone }, JWT_AUTH_TOKEN, {
                    expiresIn: '24h'
                });
                return res
                    .status(200)
                    .cookie('accessToken', accessToken, {
                        expires: new Date(new Date().getTime() + 30 * 60 *  1000),
                        sameSite: 'strict',
                        httpOnly: true
                    })
                    .cookie('authSession', true, {
                        expires: new Date(new Date().getTime() + 30 * 60 * 1000),
                        sameSite: 'strict'
                    })
                    .json({ previousSessionExpired: true, success: true });
            } else {
                return res.json({
                    success: false,
                    msg: 'Invalid refresh token'
                });
            }
        });
    } catch (err) {
        res.send(err)
    }
}
//<!==================Logout ===========================/>//
const logout = (req, res) => {
    try {
        console.log("logout");
        res
            .clearCookie('refreshToken')
            .clearCookie('accessToken')
            .clearCookie('authSession')
            .clearCookie('refreshTokenID')
            .send('logout');
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    login,
    verifyOTP,
    verifyLoginOTP,
    home,
    authenticateUser,
    refresh,
    logout
}