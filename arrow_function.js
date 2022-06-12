const relationnship = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logfriends() {
    this.friends.foreach((friend) => {
      console.log(this.name, friend);
    });
  },
};
relationnship.logfriends();
