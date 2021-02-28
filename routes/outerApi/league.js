const { makePromiseRequest } = require("../common");

const link = "https://kr.api.riotgames.com/lol/league/v4";

exports.getLeagueEntryById = async function (id, token) {
  const promise = makePromiseRequest(
    link + `/entries/by-summoner/${id}`,
    token
  );
  const rankInfo = await promise;
  return rankInfo;
};
