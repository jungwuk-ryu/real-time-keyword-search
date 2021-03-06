function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
  if (msg == "/실시간검색어") {
    try {
      var url = "https://www.naver.com/srchrank?frm=main&ag=all&gr=1&ma=-2&si=0&en=0&sp=0";
      var json = Utils.getWebText(url);
      json = json.replace(/(<([^>]+)>)/ig, "");

      var keywords = [];
      resultData = JSON.parse(json);

      for (var i in resultData["data"]) {
        var keywordData = resultData["data"][i]
        var str = keywordData["rank"] + ". " + keywordData["keyword"];
        keywords.push(str);
      }

      replier.reply(keywords.join("\n"));
    } catch (e) {
      replier.reply("오류가 발생하였습니다.");
    }
  }
}
