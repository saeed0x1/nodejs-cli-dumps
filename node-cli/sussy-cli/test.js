#!/usr/bin/env node

import axios from "axios";

(async ()=>{
	const res = await axios.get("https://edgyapi.vercel.app/api/joke/random");
	const data = await res.data.body;
	console.log(data)
})();

