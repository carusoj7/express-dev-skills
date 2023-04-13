import { Friend } from '../models/friends.js'

function index(req, res) {
  Friend.find({})
  .then(friends => {
    res.render('friends/index', {
    friends: friends,
  })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newFriend(req, res) {
  res.render('friends/new')
}

function create(req, res) {
  req.body.single = true
  Friend.create(req.body)
  .then(friend => {
    res.redirect('/friends')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/friends')
  })
}

function show(req, res) {
  Friend.findById(req.params.friendId)
  .then(friend => {
    res.render('friends/show', {
      friend: friend,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/friends')
  })
}

function deleteFriend(req, res) {
  Friend.findByIdAndDelete(req.params.friendId)
  .then(friend => {
    res.redirect('/friends')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/friends')
  })
}

export {
  index,
  newFriend as new,
  create,
  show,
  deleteFriend as delete,
}