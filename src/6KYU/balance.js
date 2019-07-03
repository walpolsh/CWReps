function balance(book) {
  let thing = book.replace(/[^\w.\s]+/g, " ");
  console.log(
    thing
      .split(" ")
      .filter(x => (x !== "" ? x !== "" : "Balance "))
      .join(` `)
  );
  return "Original Balance: " + thing;
}
export const bal = console.log(
  balance(`1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`)
);

// 'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65'
// Original Balance: 1000.00\r\n\n\n125 Market \r\n125.45\n126 Hardware \r\n34.95\n127 Video\r\n 7.45\n128 Book \r\n14.32\n129 Gasoline \r\n16.10\n
