const express = require('express')
const router = express.Router()
const Dosen = require('../model/Dosen')

//Create api for mahasiswa
router.post('/',async(req,res)=>{// (5) Buat router Mahasiswa
    const express = require('express')
    const router = express.Router() 
    const Dosen = require('../model/Dosen')
    
    // Create 
    router.post('/', async(req, res) => {
        // tampung input mahasiswa 
        const dosenPost = new Dosen({
            nidn: req.body.nidn,
            nama: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            umur:req.body.umur
        })
    
        try {
            // simpan data 
            const dosen = await dosenPost.save()
            // response
            res.json(dosen)
        } catch (error) {
            res.json({message: error})
        }
    })
    
    module.exports = router
    //Tammpung dulu input mahasiswa
    const dosenPost =  new Dosen({
        nidn: req.body.nidn,
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        umur:req.body.umur
    })
    //Simpan data dengan try catch
    try{
        //Simpan datanya
        const dosen = await dosenPost.save()
        //Beri Respon
        res.json(dosen)
    }
    catch(error){
        res.json({message: error})

    }
})

//read
router.get('/', async(req, res) =>{
    try{
        const dosen = await Dosen.find()
        res.json(dosen)
    }
    catch(error){
        res.json({message: error})
    }
})

//delete
router.put('/:dosenId', async(req,res) => {
    const data = {
        nidn: req.body.nidn,
        nama: req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
        umur: req.body.umur
    }
    try{
        const dosen = await Dosen.updateOne({_id:  req.params.dosenId},data)
        res.json(dosen)
    }catch(error){
        res.json({message: error})
    }
})

router.delete('/:dosenId', async(req,res)  => {
    try{
        const dosen  =  await Dosen.deleteOne({_id:  req.params.dosenId})
        res.json(mahasiswa)
    } catch(error){
        res.json({message:  error})
    }
})

module.exports = router;
