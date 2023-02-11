const axios = require('axios');
const Caver = require('caver-js');
const caver = new Caver('https://public-node-api.klaytnapi.com/v1/cypress');

const MIX = "0xdd483a970a7a7fef2b223c3510fac852799a88bf";//MIX Contract
const LP = "0xa50cec0216c1cee6f90c7d5359444d46315279bd";//KlaySwap LP KLAY-MIX Contract
const DECIMAL = 10*18;//Decimal 18

async function main() {
	const kip7 = new caver.kct.kip7(MIX);
    const LP_MIX_BAL = await kip7.balanceOf(LP)/DECIMAL;
    const LP_KLAY_BAL = await caver.klay.getBalance(LP)/DECIMAL;
    const CAL = LP_MIX_BAL/LP_KLAY_BAL;
    const KLAY_KRW = await axios.get('https://api.bithumb.com/public/ticker/KLAY_KRW');
	console.log(KLAY_KRW.data.data.closing_price/CAL);
}
main();