import { join } from "path";
import { Person } from "../models/person.js";

const defaultController = (request, response) => {
  // response.render(join(process.cwd(), 'views', 'index'));
  // response.status(200).send("All Persons");
  response.status(200).send({ message: "Welcome to RestAPI-V3" });
};

const homeController = async (request, response) => {
  const persons = await Person.find();
  response.status(200).send(persons);
};

const singleController = async (request, response) => {
  const { id } = request.params;
  const person = await Person.findById(id);
  if (!person) {
    response.status(400).send({ status: false });
  } else {
    response.status(400).send({ status: true, data: person });
  }
};

const newController = (request, response) => {
  var { name, address } = request.body;
  var person = new Person({ name, address });
  person
    .save()
    .then((data) => {
      response.status(400).send({ status: true, data: data });
    })
    .catch((err) => {
      response.status(500).send({ status: false });
    });
};

const putController = async (request, response) => {
  var { id } = request.params;
  var { name, address } = request.body;
  var tmpPerson = { id, name, address };
  await Person.findByIdAndUpdate(id, {
    name: name,
    address: address,
  })
    .then((data) => {
      response.status(400).send({ status: true, data: data });
    })
    .catch((err) => {
      response.status(500).send({ status: false });
    });
};

const delController = async (request, response) => {
  var { id } = request.params;
  await Person.findByIdAndRemove(id)
    .then((data) => {
      response.status(400).send({ status: true, data: data });
    })
    .catch((err) => {
      response.status(500).send({ status: false });
    });
};

// for patch

/*
await person.findByIdandUpdate(id,{req.body})

  */
export {
  defaultController,
  homeController,
  singleController,
  newController,
  putController,
  delController,
};
