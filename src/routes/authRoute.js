import mongoose from "mongoose";
import express from "express";

router.post("/login", async(req, res) => {
    const { email, password} = req.body;
    if (password.length < 8) {
        return res.status(400).json({ message: "password less than 7 characters" })
      }
      try {
        await User.login({
          username,
          email,
          password,
        }).then(user =>
          res.status(200).json({
            message: "User successfully login",
            user,
          })
        )
      } catch (err) {
        res.status(401).json({
          message: "User email and password are invalid",
          error: error.mesage,
        })
      }
    })
