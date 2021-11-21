#!/usr/bin/env node
const path = require('path')
const { utils } = require('ethers')
const trim = str => str.replace(/\.0$/, '')
const [, unit, number] = process.argv
const value = utils.parseUnits(number, path.basename(unit))
console.log(`wei ${trim(utils.formatUnits(value, 'wei'))}`)
console.log(`gwei ${trim(utils.formatUnits(value, 'gwei'))}`)
console.log(`ether ${trim(utils.formatUnits(value, 'ether'))}`)