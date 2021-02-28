const { makePromiseRequest } = require("../common");

const link = "https://kr.api.riotgames.com/lol/match/v4";

exports.getMatchList = async function (startGame, accountId, gameCount, token) {
  const promise = makePromiseRequest(
    link +
      `/matchlists/by-account/${accountId}?endIndex=${
        Number(startGame) + Number(gameCount)
      }&beginIndex=${Number(startGame)}`,
    token
  );
  const matchList = await promise;
  return matchList;
};

exports.getMatchesInfo = async function (matchId, token) {
  const promises = makePromiseRequest(link + `/matches/${matchId}`, token);
  const matchInfo = await promises;
  return matchInfo;
};

exports.getTimeLine = async function (matchId, token) {
  const promise = makePromiseRequest(
    link + `/timelines/by-match/${matchId}`,
    token
  );
  const timeLine = await promise;
  return timeLine;
};
