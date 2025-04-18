const users = {
    "1": "harshit chaudhary",
    "2": "Barua",
    "3": "tanisha singh",
    "4": "uday chaudhary",
    "5": "soniya kumari",
    "6": "govind chaudhary"
  };
  
  const posts = {
    "1": [
      { id: 101, userid: 1, content: "Post a" },
      { id: 102, userid: 1, content: "Post b" }
    ],
    "2": [
      { id: 201, userid: 2, content: "Post c" },
      { id: 202, userid: 2, content: "Post d" }
    ],
    "3": [
      { id: 301, userid: 3, content: "Post e" }
    ],
    "4": [
      { id: 401, userid: 4, content: "Post f" },
      { id: 402, userid: 4, content: "Post g" }
    ],
    "5": [],
    "6": [
      { id: 601, userid: 6, content: "Post h" }
    ]
  };
  
  const comments = {
    101: [{ id: 1, content: "Wow" }, { id: 2, content: "awesome" }],
    102: [{ id: 3, content: "cool" }],
    201: [{ id: 4, content: "Amazing" }, { id: 5, content: "Greatfull" }],
    202: [],
    301: [{ id: 6, content: "Okk" }],
    401: [{ id: 7, content: "Dope" }, { id: 8, content: "Yes" }, { id: 9, content: "Like it" }],
    402: [{ id: 10, content: "Superb" }],
    601: []
  };
  
  module.exports = { users, posts, comments };
  