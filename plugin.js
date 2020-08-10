exports.hooks = [
  {
    name: "onStatusUpdate",
    hook: function (user) {
      const StatusType = this.RequireMain("./src/Models/Status").StatusType;

      if(user.status.type == StatusType.PLAYING && user.status.text.toLowerCase().indexOf("harumachi") >= 0 && user.status.text.toLowerCase().indexOf("clover") >= 0) {
        this.Logger.Info(`I'm sorry, ${user.name}, but there is no more Harumachi Clover for you!`);
        user.CloseClient();
      }
    }
  }
];
