function chessBoard(size) {
  let isBlack = true;

  console.log('<div class="chessboard">'); // parent div

  // wrapper div
  for (let i = 1; i <= size; i++) {
    console.log('  <div>'); // child div

    //span
    for (let i = 1; i <= size; i++) {
      if (isBlack) {
        isBlack = false;
        console.log('    <span class="black"></span>'); // span color
      } else {
        isBlack = true;
        console.log('    <span class="white"></span>'); // span color
      }
    }

    if (size % 2 === 0) {
      if (isBlack) {
        isBlack = false;
      } else {
        isBlack = true;
      }
    }

    console.log('  </div>'); // child div close
  }
  console.log('</div>'); // parent div close
}

chessBoard(6);
