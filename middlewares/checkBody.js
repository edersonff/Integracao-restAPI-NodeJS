module.exports = (req, res, next, keys) => {
  const body = Object.values(req.body);

  const verify = keys.filter((key) => {
    //verifing if keys have been sent
    if (!body.includes(key)) {
      return key;
    }
  });
  
  //continue application
  if(verify.length == 0)
    next();
  else
    res.status(422).json({ msg: `É necessario preencher '${keys[0] /* Just ask the first wrong */ }' para prosseguir` });

};
