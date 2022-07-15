#!/usr/bin/env node

const { exec } = require("child_process")
const dirName = process.argv[2]

exec(`mkdir -p ${dirName}`)