function solve(radius, height) {
  let volume = (Math.PI / 3) * (radius * radius * height);
  let totalSurfaceArea = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}

solve(3.3, 7.8);
