import { friends } from "../data/friend-data.js";

function index(req, res) {
  res.render('friends/index', {
    friends: friends
  })
}

export {
  index,
}