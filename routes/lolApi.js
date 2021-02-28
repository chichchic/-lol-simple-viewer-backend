var express = require("express");
const request = require("request");
const url = require("url");

var router = express.Router();

const { getSummonorInfoByName } = require("./outerApi/summonor");
const {
  getMatchList,
  getMatchesInfo,
  getTimeLine,
} = require("./outerApi/match");
const { getLeagueEntryById } = require("./outerApi/league");

/* GET home page. */
router.get("/summoner", async function (req, res, next) {
  const urlParse = url.parse(req.url, true);
  const { name, token } = urlParse.query;
  const summonerInfo = await getSummonorInfoByName(name, token);
  res.json(summonerInfo);
  res.end();
});

router.get("/matchList", async function (req, res, next) {
  const urlParse = url.parse(req.url, true);
  const { accountId, start, gameCount, token } = urlParse.query;

  const matchList = await getMatchList(start, accountId, gameCount, token);
  res.json(matchList);
  res.end();
});

router.get("/matchInfo", async function (req, res, next) {
  const urlParse = url.parse(req.url, true);
  const { matchId, token } = urlParse.query;

  const matchInfo = await getMatchesInfo(matchId, token);
  res.json(matchInfo);
  res.end();
});

router.get("/timeLines", async function (req, res, next) {
  const urlParse = url.parse(req.url, true);
  const { matchId, token } = urlParse.query;

  const timeLines = await getTimeLine(matchId, token);
  res.json(timeLines);
  res.end();
});

router.get("/rank", async function (req, res, next) {
  const urlParse = url.parse(req.url, true);
  const { id, token } = urlParse.query;

  console.log(id, token);
  const rankInfo = await getLeagueEntryById(id, token);

  res.json(rankInfo);
  res.end();
});

module.exports = router;
