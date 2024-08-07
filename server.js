import express, { json, urlencoded } from "express";

import { applicationRouter } from "./app/routes/application.js";

// const authRoutes =require('./app/routes/auth.js');

import { condidateRouter } from "./app/routes/candidates.js";

import { categoryRouter } from "./app/routes/category.js";

import { interviewRouter } from "./app/routes/interview.js";

import { jobOfferRouter } from "./app/routes/job-offers.js";

import { notificationRouter } from "./app/routes/notifications.js";

import { roleRouter } from "./app/routes/role.js";

import { skillRouter } from "./app/routes/skills.js";

import { userRouter } from "./app/routes/user.js";

import cors from "cors";
const app = express();

var corsOption = {
  origin: "http://localhost:4200",
};
app.use(cors(corsOption));
app.use(json());
app.use(urlencoded({ extended: true }));

// const { testDbConnection } = require('./config/db');
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// testDbConnection();

app.use("/api/application", applicationRouter);
// app.use('/api/poste', authRoutes);
app.use("/api/candidates", condidateRouter);
app.use("/api/category", categoryRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/joboffer", jobOfferRouter);
app.use("/api/notification", notificationRouter);
app.use("/api/role", roleRouter);
app.use("/api/skill", skillRouter);
app.use("/api/user", userRouter);

const port = 3000;
app.listen(port, () => {
  console.log("server up on port 3000");
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
