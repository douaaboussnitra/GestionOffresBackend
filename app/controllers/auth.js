const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var db=require('../config/db.config')


exports.login=(req,res)=> {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';
    
    db.execute(query, [email], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });    
            const user = results[0];
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            if (!passwordIsValid) return res.status(401).json({ message: 'Invalid password' });
            
            const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey', { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token });
        });
}


exports.register= (req, res) => {
    const { username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const query = 'INSERT INTO users (username, email , password) VALUES (?, ?, ?)';
    db.execute(query, [username, email , hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
};