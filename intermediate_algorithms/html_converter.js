/*Convert the characters &, <, >, " , and ', in a string to their corresponding HTML entities.*/

function convertHTML(str) {
  let htmlStr = str.split('&').join('&amp;')
                .split('<').join('&lt;')
                .split('>').join('&gt;')
                .split('"').join('&quot;')
                .split("'").join('&apos;');
  return htmlStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"))