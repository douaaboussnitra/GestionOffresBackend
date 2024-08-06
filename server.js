
const express = require("express") ;

const applicationRoute = require('./app/routes/application.js');

const authRoutes =require('./app/routes/auth.js');

const candidatesRoutes =require('./app/routes/candidates.js');

const categoryRoutes = require('./app/routes/category.js');

const interviewRoutes =require('./app/routes/interview.js');

const joboffersRoutes =require('./app/routes/job-offers.js');

const notificationsRoutes =require('./app/routes/notifications.js');

const roleRoutes =require('./app/routes/role.js');

const skillsRoutes =require('./app/routes/skills.js');

const userRoutes =require('./app/routes/user.js');

const cors = require("cors")  ;
const app = express() ;

var corsOption = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOption)) ;
app.use(express.json()) ;
app.use(express.urlencoded({ extended: true })) ;

const { testDbConnection } = require('./config/db');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
testDbConnection();

app.use('/api/category', applicationRoute );
app.use('/api/poste', authRoutes);
app.use('/api/organisation', candidatesRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/candidat', interviewRoutes);
app.use('/api/recruteur', joboffersRoutes);
app.use('/api/offreemploi', notificationsRoutes);
app.use('/api/category', roleRoutes);
app.use('/api/category', skillsRoutes);
app.use('/api/category', userRoutes);


const port = 3000;
app.listen(port, () => {
    console.log('server up on port 3000')
})



/*
const express = require('express')
const app = express();
const cors = require('cors');




const categorieEmploieRoutes = require('./routes/categorie_emploi_routes');
const posteRoutes = require('./routes/poste_routes');
const organisationRoutes = require('./routes/organisation_routes');
const candidatRoutes = require('./routes/candidat_routes').default;
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