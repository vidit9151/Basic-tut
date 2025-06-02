import ratelimit from "../config/upstash.js";

export const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key"); //if in place of my-limit key we place user id each user will get differnt rate limtit timers
    if (!success)
      return res
        .status(429)
        .json({ message: "too many requests,try again later" });

    next();
  } catch (error) {
    console.log("rate limiter error ", error);
    next(error);
  }
};
