$(document).ready(() => {
  var streamList = ['0timado0',
    '17uu',
    '420jenkins',
    '7ckngmad',
    'AdmiralBulldog',
    'AmazHS',
    'Arteezy',
    'BigDaddy',
    'Chessie',
    'Clarkeezy',
    'Dendi',
    'Draskyl',
    'DreamLeague',
    'FollowAkke',
    'HSdogdog',
    'Moonmeander',
    'NoctisAK47',
    'Rafis0',
    'Solitary_Judge',
    'WagamamaTV',
    'WubWoofWolf',
    'abed_dota',
    'aliastar',
    'alohadancetv',
    'angelsimosu',
    'arise_3012',
    'attackerdota',
    'aui_2000',
    'bOne7',
    'babyknight',
    'bananaslamjamma',
    'barnyyy',
    'beyondthesummit',
    'beyondthesummit2',
    'beyondthesummit3',
    'beyondthesummit4',
    'blackdotatv',
    'blitzdota',
    'boris_dota',
    'braxton911',
    'brinkdota',
    'bububu',
    'canceldota',
    'ccncdota2',
    'chainsito11',
    'cr1tdota',
    'd47biryu',
    'day9tv',
    'dizzykitten',
    'dotacapitalist',
    'dotademon',
    'dotagasm',
    'dotamajor',
    'dotastarladder_en',
    'egm',
    'ek0p',
    'emperorpenguin83',
    'envybaer',
    'epicenter_en1',
    'epicenter_en2',
    'era17',
    'esl_dota2',
    'eternalenvyy',
    'evilgeniuses',
    'feardota',
    'febbydoto',
    'fogged',
    'forev',
    'freecodecamp',
    'funn1k',
    'godot',
    'gorgcc',
    'grandgrant',
    'h4nn1',
    'happystick',
    'hfndota',
    'himegurecia',
    'illidanstrdoto',
    'itshafu',
    'jeraxai',
    'jeyodude',
    'kano',
    'keemerah',
    'kennietv',
    'koushudota',
    'kvhdota',
    'lamperkat',
    'lil_hardy',
    'limmp',
    'lizzarddota2',
    'ltt98',
    'madaradota2',
    'matumbaman',
    'meraclechamlotte',
    'merlinidota',
    'midone',
    'mikah138',
    'miracle_doto',
    'miserytheslayer',
    'monkeys_forever',
    'moodota2',
    'moonducktv',
    'mssdota',
    'noobfromua',
    'nooneboss',
    'nurbika',
    'odpixel',
    'official_niqua',
    'ohaiyodota',
    'pajkattdota',
    'pgl_dota',
    'pikachama',
    'ppd',
    'puppey',
    'purgegamers',
    'qSnake_',
    'qodota2',
    'qojqva',
    'qsnake',
    'ramzesdoto',
    'reimudesu',
    'resolut1ontv',
    'rime_',
    'ritsugamer',
    's4',
    'sakurafrost225',
    'sheevergaming',
    'shigetora',
    'sing_sing',
    'siractionslacks',
    'smashdota',
    'sneykingdota',
    'spare',
    'stan_king',
    'stormspirittv',
    'sumaildoto',
    'synderen',
    'thijshs',
    'universedota',
    'vampyrette',
    'vanNDota',
    'vankhoahoang',
    'w33haa',
    'yapzordota',
    'yawar_',
    'zai',
    'zingle313',
    'zotac_cup'
  ];
  const clientID = "?client_id=em2uqxfm44rmjop2ism5iyga6778f5";
  const endpoint = "https://api.twitch.tv/kraken/channels/";
  const statuscheck = "https://api.twitch.tv/kraken/streams/";
  const twitchLink = "https://www.twitch.tv/";
  var onlineArray = [];
  streamList.forEach((el) => {
    $.ajax({
      method: "GET",
      url: endpoint + el + clientID,
      dateType: "json"
    }).then((twitch) => {
      $.ajax({
        method: "GET",
        url: statuscheck + el + clientID,
        dataType: "json"
      }).then((status) => {
        twitch.logo === null ? twitch.logo = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png" : twitch.logo = twitch.logo;
        if (status.stream != null) {
          var channel = "<tr><td><a href= '" +twitchLink+ twitch.name+" 'target='_blank' style=' width: 100%; height: 123px;'><img src='" + twitch.logo + "' alt='logo' />" + twitch.name + "</a> </td>  <td><p>" + twitch.game + "</p></td> <td><p>" + twitch.status + "</p></td><td> <span id='red'></span>" + status.stream.viewers + "</td></tr>";



          $("#online").append(channel);
          onlineArray.push(el)
        } else {
          channel = "<tr><td><a href= '" +twitchLink+ twitch.name+" 'target='_blank' style=' width: 100%; height: 123px;'><img src='" + twitch.logo + "' alt='logo' />" + twitch.name + "</a> </td>  <td><p>" + twitch.game + "</p></td> <td><p>" + twitch.status + "</p></td><td><p> Offline </p></td></tr>";
          $("#offline").append(channel);
        }
      }).catch((error) => {
        console.log(error);
      })
    }).catch((error) => {
      console.log(error);
    });
  });
  $(".clickable-row").on("click",function() {
        window.location = $(this).data("href");
    });

});
