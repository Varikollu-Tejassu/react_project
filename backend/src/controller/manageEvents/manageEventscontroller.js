
const express = require('express');
const creating = require('../../sequelize/models');
const table = creating.calendar

const create = async (req,res,next)=>{
    try{
      res.send("from")

    }
    catch(error){
        res.status(400).send({message:"duplicate"})
    }
}


const getdata = async (req,res)=>{
    try{
        const{id}=req.params;
        const gettingdata = await table.findOne({
            where : {
                id:id
            }
        })
        res.send(gettingdata);
    }
    catch(error){
        console.log(error)
    }
}

const postdata = async (req,res)=>{
    try {
        // const { title, description } = req.body;
        const task = await table.create({ title:"hi",description:"hiiiiiiiiiiiiiiii", published:false });
        res.json(task);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }


module.exports ={create,getdata,postdata}
