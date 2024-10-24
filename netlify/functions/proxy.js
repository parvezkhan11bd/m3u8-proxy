const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // এখানে আপনার .m3u8 লিঙ্ক দিন
  const url = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/sony_aath/playlist.m3u8';  // আপনার m3u8 লিঙ্ক দিন

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Cookie': 'Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9ibGRjbXByb2QtY2RuLnRvZmZlZWxpdmUuY29tLw:Expires=1729916168:KeyName=prod_linear:Signature=neXk08t1tT4lvdNpU3XsMvdHDGhzcT_QdIYshpWsMscQz5pXQhaBGX5PZwab_WV-_pNAguBx71izHiisE9lSBA'  // কুকি এখানে যোগ করুন
    }
  });

  const data = await response.text();
  return {
    statusCode: 200,
    body: data
  };
};
