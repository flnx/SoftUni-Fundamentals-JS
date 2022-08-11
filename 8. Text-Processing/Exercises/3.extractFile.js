function extractFile(input) {
  let directory = input.split('\\');
  let fileName = directory.pop().split('.');
  let extension = fileName.pop();
  fileName = fileName.join('.');

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx.rom');
