// import drink model
const { estimatedDocumentCount } = require("../models/drinks.models");
const Drink = require("../models/drinks.models");

// function to save new drinks to database
exports.new_drinks = async (req, res) => {
  const {
    drink_name,
    manufacturer,
    expiry_date,
    quantity_available,
    created_at,
  } = req.body;
  try {
    // input validation
    if (!(drink_name && manufacturer && expiry_date && quantity_available)) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check if drink name already exists in database
    const drink_exist = await Drink.findOne({ drink_name });
    if (drink_exist) {
      return res.status(409).json({
        message: `${drink_name} already exist, just update the quantity available 😉`,
      });
    }

    // save new drinks
    const new_drink = await Drink.create({
      drink_name,
      manufacturer,
      expiry_date,
      quantity_available,
      created_at,
    });

    return res.status(201).json({
      message: "Drink saved successfully 😎",
      new_drink,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong 😢",
    });
  }
};

// function to view all available drinks
exports.drinks_available = async (req, res) => {
  try {
    // get all drinks available
    const all_drinks = await Drink.find();
    const drinks_count = await Drink.estimatedDocumentCount();
    return res.status(200).json({
      message: "These are all the drinks available:",
      drinks_count,
      all_drinks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong 😢",
    });
  }
};

// function to update drinks
exports.update_drinks = async (req, res) => {
  const id = req.params.id;
  const { quantity_available, manufacturer, drink_name, expiry_date } =
    req.body;
  try {
    // check if id is associated with a drink
    const drink = await Drink.findById(id);
    if (!drink) {
      return res.status(400).json({
        message: "drink not found",
      });
    }
    const edit_drinks = await Drink.findByIdAndUpdate(
      id,
      { quantity_available, manufacturer, drink_name, expiry_date },
      { new: true }
    );
    return res.status(200).json({
      message: "Drink updated successfully",
      drink: edit_drinks,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong 😢",
    });
  }
};

// function to delete drinks
exports.delete_drinks = async (req, res) => {
  const id = req.params.id;
  try {
    // check if id is associated with a drink
    const drink = await Drink.findById(id);
    if (!drink) {
      return res.status(400).json({
        message: "drink not found",
      });
    }

    // delete by id
    await Drink.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Drink deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong 😢",
    });
  }
};

// function to get single drink
exports.single_drink = async (req, res) => {
  const id = req.params.id;
  try {
    // check if id is associated with a drink
    const drink = await Drink.findById(id);
    if (!drink) {
      return res.status(400).json({
        message: "drink not found",
      });
    }

    return res.status(200).json({
      message: "Success 😊",
      drink,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong 😢",
    });
  }
};
