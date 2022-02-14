module.exports = (req, res) => {
  let body = "";

  req
    .on("data", (chunk) => {
      body += chunk;
    })
    .on("error", (error) => {
      if (error) console.log(error);
    })
    .on("end", () => {
      if (body) {
        req.body = JSON.parse(body);
      }
    });
};
