const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");
const subscriber = require("../models/subscriber");

router.get("/", async (req, res) => {
  try {
    const subcribers = await Subscriber.find();
    res.send(subcribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const subcriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
    subscribeDate: req.body.subscribeDate,
  });

  try {
    const newSubscriber = await Subscriber.create(subcriber);
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber.name);
});

router.delete("/:id", (req, res) => {});
router.patch("/:id", (req, res) => {});

async function getSubscriber(req, res, next) {
  let subcriber;
  try {
    subcriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Subscriber not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.subcriber = subcriber;
  next();
}
module.exports = router;
