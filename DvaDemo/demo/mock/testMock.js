module.exports = {
  "GET /api/testMock":(req,res)=>{
    console.log(req);
    res.send({
      name:'123'
    })
  }
}