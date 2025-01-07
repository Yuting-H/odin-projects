const gameboard = (() => {
  var board = [];

  const alert = () => {
    console.log("hello");
  };

  return { alert };
})();

gameboard.alert();
