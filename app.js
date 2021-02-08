const express = require("express");
const app = express();
const port = 8080;

//home
app.get("/", (req, res) => res.send("Hello World on AWS Cloud. Great!"));

app.get("/products", (req, res) => {
    res.json({
        name: "Mobile Phone",
        title: "Smart phone",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget accumsan erat. Quisque non diam vitae est finibus tempus. Quisque pharetra imperdiet leo. Suspendisse tincidunt efficitur sollicitudin. Suspendisse interdum consectetur leo, sit amet ultricies nisl varius sit amet. Suspendisse lorem neque, convallis sit amet imperdiet non, ultricies quis massa. Quisque sed eleifend lacus, eget aliquam nunc. Curabitur posuere lectus et turpis varius, in semper erat viverra. Nullam ac blandit velit.",
    });
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
