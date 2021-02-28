const { makePromiseRequest } = require("../common");

const link = "https://kr.api.riotgames.com/lol/summoner/v4";
exports.getSummonorInfoByName = async function (name, token) {
  const promise = makePromiseRequest(
    link + `/summoners/by-name/${encodeURI(name)}`,
    token
  );
  const summonerInfo = await promise;
  return summonerInfo;
};
