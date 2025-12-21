var browserVersion = 8.14
{
    var browserName = 'Chrome'
    let browserVersion = 8.15
    const loadUrl = "www.google.com"
    console.log("Inside the block: " +browserName)
    console.log("Inside the block: " +browserVersion)
    console.log("Inside the block: " +loadUrl)
}

console.log("outside the block: " +browserVersion)  
console.log("outside the block: " +browserName)
console.log("outside the block: " +loadUrl)