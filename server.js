import express, { json, urlencoded } from "express";

import applicationRouter  from "./app/routes/application.js";

// const authRoutes =require('./app/routes/auth.js');

import condidateRouter  from "./app/routes/candidates.js";

import categoryRouter  from "./app/routes/category.js";

import interviewRouter  from "./app/routes/interview.js";

import jobOfferRouter  from "./app/routes/job-offers.js";

import validationRouter  from "./app/routes/validation.js";

import roleRouter  from "./app/routes/role.js";

import skillRouter  from "./app/routes/skills.js";

import userRouter  from "./app/routes/user.js";

import adminRouter  from "./app/routes/admin.js";

import recruteurRouter  from "./app/routes/user.js";

import authRouter  from "./app/routes/auth.js";

import cors from "cors";

const app = express();

const corsOptions = {
  origin: ["http://localhost:4200"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// const { testDbConnection } = require('./config/db');
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// testDbConnection();

app.use("/api/application", applicationRouter);
app.use('/api/auth', authRouter);
app.use("/api/candidat", condidateRouter);
app.use("/api/category", categoryRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/joboffer", jobOfferRouter);
app.use("/api/validation", validationRouter);
app.use("/api/role", roleRouter);
app.use("/api/skill", skillRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/recruiter", recruteurRouter);


const port = 8080;
app.listen(port, () => {
  console.log("server up on port 8080");
});

/*
const express = require('express')
const app = express();
const cors = require('cors');




const categorieEmploieRoutes = require('./routes/categorie_emploi_routes');
const posteRoutes = require('./routes/poste_routes');
const organisationRoutes = require('./routes/organisation_routes');
const candidatRoutes = require('./routes/candidat_routes');
const recruteurRoutes = require('./routes/recruteur_routes');
const offreEmploiRoutes = require('./routes/offre_emploi_routes');


//TEST CONNECTION DB
const { testDbConnection } = require('./config/db');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
testDbConnection();
app.use('/api/categorieemploi', categorieEmploieRoutes);
app.use('/api/poste', posteRoutes);
app.use('/api/organisation', organisationRoutes);
app.use('/api/candidat', candidatRoutes);
app.use('/api/recruteur', recruteurRoutes);
app.use('/api/offreemploi', offreEmploiRoutes);
const port = 3000;
app.listen(port, () => {
    console.log('server up on port 3000')
})
    */
