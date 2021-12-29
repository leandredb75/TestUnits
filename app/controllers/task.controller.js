const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const { data } = req.body
  try{
    const task = await Task.create({data})
    res.json({status: true , task })
  } catch (e){
    res.json({status: false , e })
  }
};

exports.findAll = (req, res) => {
  try{
    const task = await Task.findAll();
    res.json({status: true , task })
  } catch (e){
    res.json({status: false , e })
  }
};

exports.findOne = (req, res) => {
  const { id } = req.body
  try{
    const task = await Task.findOne({
      where : {
        id
      }
    })
    res.json({status: true , task })
  } catch (e){
    res.json({status: false , e })
  }
};

exports.update = (req, res) => {
  const { data } = req.body
  try{
    const task = await Task.update({data}, {
      where : {
        id
      }
    })
    res.json({status: true , task })
  } catch (e){
    res.json({status: false , e })
  }
};

exports.delete = (req, res) => {
  const { id } = req.body
  try{
    const task = await Task.detele({
      where : {
        id
      }
    })
    res.json({status: true , task })
  } catch (e){
    res.json({status: false , e })
  }
};

