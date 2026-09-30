import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

function otpKey(phone) {
    return `otp:${phone}`;
}

app.post('/otp', async (req, res) => {
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP

    await redis.set(otpKey(phone), otp, 'EX', 30); // Set OTP with a TTL of 30 seconds
    res.json({ success: true, message: `OTP :${otp} sent to ${phone}. It will expire in 30 seconds.` });
})

app.post('/verify-otp', async (req, res) => {
    const { phone, otp } = req.body;
    const storedOtp = await redis.get(otpKey(phone));

    if(!storedOtp) {
        return res.json({ success: false, message: "OTP has expired or does not exist." });
    }

    if(storedOtp !== otp) {
        return res.json({ success: false, message: "Invalid OTP." });
    }

    // OTP is valid, delete it from Redis
    await redis.del(otpKey(phone));
    res.json({ success: true, message: "OTP verified successfully." });
})

app.get('/otp/:phone/ttl', async (req, res) => {
    const ttl = await redis.ttl(otpKey(req.params.phone));
    res.json({ phone: req.params.phone, ttl: ttl });
})

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})