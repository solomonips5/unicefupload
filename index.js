const express = require("express");
const app = express();
const path = require("node:path");
const fs = require("node:fs");
const multer = require("multer");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
process.on("uncaughtException", (error, origin) => {
	console.error(error);
});
dotenv.config();

const filenames = {
	bba1: "bba1.csv",
	bba2: "bba2.csv",
	bba3: "bba3.csv",
	bca1: "bca1.csv",
	bca2: "bca2.csv",
	bca3: "bca3.csv",
	bcom1: "bcom1.csv",
	bcom2: "bcom2.csv",
	bcom3: "bcom.csv",
	chemistry1: "chemistry1.csv",
	chemistry2: "chemistry2.csv",
	chemistry3: "chemistry3.csv",
	cs1: "cs1.csv",
	cs2: "cs2.csv",
	cs3: "cs3.csv",
	english1: "english1.csv",
	english2: "english2.csv",
	english3: "english3.csv",
	maths1: "maths1.csv",
	maths2: "maths2.csv",
	maths3: "maths3.csv",
	physics1: "physics1.csv",
	physics2: "physics2.csv",
	physics3: "physics3.csv",
	tamil1: "tamil1.csv",
	tamil2: "tamil2.csv",
	tamil3: "tamil3.csv",
};

function compilePage(dept, year, filename) {
	try {
		let userData = fs.readFileSync(path.join(__dirname, filename), {
			encoding: "utf-8",
		});
		const rows = userData.toString().split("\n");

		const users = rows.map((row, i) => {
			const values = row.split(",");
			return {
				name: values[0] ?? "",
				email: values[1] ?? "",
				phone: values[2] ?? "",
				dept: values[3] ?? "",
				year: values[4] ?? "",
				filename: values[5] ?? "",
			};
		});
		const page = `
        <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>uploaded</title>
        		<style>
			table {
				border-collapse: collapse;
				border: 1px solid black;
			}
			td,
			th {
				border: 1px solid black;
				padding: 2px;
			}
		</style>
    </head>
    <body>
        <h2>${dept}-${year}</h2>
        <table>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>dept</th>
                    <th>year</th>
                    <th>filename</th>
                </tr>
            </thead>
            <tbody>
                ${users.map((user, index) => {
					return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.dept}</td>
                        <td>${user.year}</td>
                        <td>${user.filename}</td>
                    </tr>`;
				})}

            </tbody>
        </table>
    </body>
</html>
`;

		return page;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

function writeLog(file, name, email, phone, dept, year) {
	const filename = name + dept + year + phone + ".pdf";
	const data = `${name},${email},${phone},${dept},${year},${filename}\n`;

	fs.appendFile(path.join(__dirname, file), data, (err) => {
		if (err) throw err;
	});
}

app.use(express.json({ limit: 500000 }));
app.use(express.urlencoded({ extended: false }));
app.use(express.raw({ limit: 500000 }));
app.use(express.text({ limit: 500000 }));
app.get("/", async (req, res, next) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/uploaded/:dept/:year", async (req, res, next) => {
	const { dept, year } = req.params;
	const deptAndYear = dept + year;
	const users1 = [
		{ name: "solomon", email: "solom@gmail.com", dept: "1" },
		{ name: "justin", email: "jus@gmail.com", dept: "1" },
	];
	const users2 = [
		{ name: "solomon", email: "solom@gmail.com", dept: "2" },
		{ name: "justin", email: "jus@gmail.com", dept: "2" },
	];
	const users3 = [
		{ name: "solomon", email: "solom@gmail.com", dept: "3" },
		{ name: "justin", email: "jus@gmail.com", dept: "3" },
	];
	res.type("text/html");

	switch (deptAndYear) {
		case "tamil1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "tamil2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "tamil3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "english1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "english2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "english3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "maths1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "maths2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "maths3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "physics1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "physics2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "physics3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "chemistry1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "chemistry2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "chemistry3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bcom1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bcom2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bcom3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bba1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bba2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bba3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bca1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bca2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "bca3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "cs1": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "cs2": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		case "cs3": {
			res.send(compilePage(dept, year, deptAndYear + ".csv"));
			return;
		}
		default: {
			res.status(404).send("<h1>404 Not Found</h1>").end();
		}
	}
});

app.post("/upload", async (req, res, next) => {
	try {
		const { name, email, phone, dept, year, file, filename } = JSON.parse(
			req.body,
		);
		const deptAndYear = dept + year;

		const data = file.split("base64,")[1];
		const fileBuffer = Buffer.from(data, "base64");
		const sender = {
			name: "solomon",
			mailAddress: "solomonips5@gmail.com",
		};

		const transporter = nodemailer.createTransport({
			port: 587,
			host: "smtp.gmail.com",
			service: "gmail",
			auth: {
				// method: "login",
				user: sender.mailAddress,
				pass: "ppxe ybhi cpkh kluo",
			},
			// authMethod: "PLAIN",
			secure: false,
			// tls,
			// ignoreTLS : false,
			// requireTLS : true,
			// name,
			// localAddress,
			// connectionTimeout: 1000 * 60 * 2, //2min
			// greetingTimeout: 1000 * 30, //30sec
			// socketTimeout: 1000 * 60 * 10,
			// dnsTimeout: 1000 * 30,
			// logger: true,
			// debug: false,
			disableFileAccess: false,
			disableUrlAccess: false,
			// pool : false,
			// proxy,
		});

		transporter.verify((error, success) => {
			if (error) {
				throw error;
			}
			if (success) {
				transporter
					.sendMail({
						attachments: [
							{
								filename: filename,
								content: fileBuffer,
								contentType: "application/pdf",
								cid: "007",
							},
						],
						from: {
							name: sender.name,
							address: sender.mailAddress,
						},
						to: email,
						// cc ,
						// bcc,
						subject: "UNICEF Certificate",
						text: "",
						html: `
                                <!DOCTYPE html>
                                <html lang="en">
                                    <head>
                                        <meta charset="UTF-8" />
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                        <title>Signup</title>
                                        <style>
                                          
                                        </style>
                                    </head>
                                    <body>
                                        <main class="main">
                                        <h3>${name}</h3>
                                        <h2>${email}</h2>
                                        <h2>${phone}</h2>
                                        <p>${dept}-${year}</p>
                                        
                                          
                                            <a href="${file}" download>file</a>
  

                                        </main>
                                        <footer class="footer">
                                            <p class="copyright">From scc Eraiyur-607201</p>
                                        </footer>
                                    </body>
                                </html>`,

						attachDataUrls: true,
						encoding: "utf-8",
						textEncoding: "quoted-printable",
						priority: "low",
						headers: [],
						date: new Date(Date.now()).toLocaleString(),
						disableFileAccess: true,
						disableUrlAccess: true,
					})
					.then(
						(result) => {
							console.log(result);
							switch (deptAndYear) {
								case "tamil1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "tamil2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "tamil3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "english1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "english2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "english3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "maths1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "maths2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "maths3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "physics1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "physics2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "physics3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "chemistry1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "chemistry2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "chemistry3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bcom1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bcom2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bcom3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bba1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bba2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bba3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bca1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bca2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "bca3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "cs1": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "cs2": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								case "cs3": {
									writeLog(
										deptAndYear + ".csv",
										name,
										email,
										phone,
										dept,
										year,
									);

									return res
										.status(200)
										.json({
											success: true,
											message: "success",
										})
										.end();
								}
								default: {
									res.status(404)
										.send("<h1>404 Not Found</h1>")
										.end();
								}
							}
						},
						(err) => {
							console.log(err);
							throw err;
						},
					);
			}
		});
	} catch (error) {
		console.log(error);
		next(error);
	}
});

app.all("/", (req, res, next) => {
	res.type("text/html");
	res.status(404).send("<h1>404 Not Found</h1>").end();
});

app.use((err, req, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	console.error(err);
	res.type("text/html");
	res.status(500)
		.send("<h1>Error please inform me SOLOMON 1-BCA 9363076352</h1>")
		.end();
});

app.listen(5000,() => {
	console.log("server running");
});
